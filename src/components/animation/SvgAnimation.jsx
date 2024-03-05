import React, { memo, useEffect, useRef } from 'react'

import { useWindowSize } from '../../hooks/useWindowSize'

const colorsSvg = [
    '#F2BC1C',
    '#9C64FC',
    '#F2BC1C',
    '#9C64FC',
    '#F2BC1C',
    '#9C64FC',
    '#F2BC1C',
    '#9C64FC',
    '#F2BC1C',
    '#9C64FC',
]

function getRandomFromTo(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const getRandomPosition = (max) => {
    return Math.floor(Math.random() * max) + 1
}

const moveSvgRandomly = (svg, id, containerWidth, containerHeight) => {
    const initialX = getRandomPosition(containerWidth)
    const initialY = getRandomPosition(containerHeight)

    const getRotate = () => `rotate(${id % 2 ? '-' : ''}15deg)`

    svg.style.transform = `translate(${initialX}px, ${initialY}px) ${getRotate()}`

    const initialDx = getRandomPosition(10) - 5
    const initialDy = getRandomPosition(10) - 5

    const params = { x: initialX, y: initialY, dx: initialDx, dy: initialDy }

    const intervalId = setInterval(() => {
        let newX = params.x + params.dx
        let newY = params.y + params.dy

        if (newX < 0 || newX > containerWidth) {
            params.dx = -params.dx
            newX = params.x + params.dx
        }
        if (newY < 0 || newY > containerHeight) {
            params.dy = -params.dy
            newY = params.y + params.dy
        }

        params.x = newX
        params.y = newY
        svg.style.transform = `translate(${params.x}px, ${params.y}px) ${getRotate()}`
    }, 4000)

    return intervalId
}

const SvgAnimation = memo(() => {
    const { width, height } = useWindowSize()
    const svgContainer = useRef(null)

    const svgData = colorsSvg.map((fill) => ({
        fill,
        width: getRandomFromTo(width * 0.2, width * 1.4),
        height: getRandomFromTo(height / 3, height / 1.5),
    }))

    useEffect(() => {
        const svgArr = svgContainer.current.children
        const intervalIdArr = []

        for (let i = 0; i < svgArr.length; i++) {
            const intervalId = moveSvgRandomly(svgArr[i], i, width, height)
            intervalIdArr.push(intervalId)
        }

        return () => intervalIdArr.forEach((el) => clearInterval(el))
    }, [])

    return (
        <div className="svg-animation" ref={svgContainer}>
            {svgData.map((el, id) => (
                <svg
                    viewBox={`0 0 ${el.width} ${el.height}`}
                    width={el.width}
                    height={el.height}
                    className="svg-animation__svg"
                    key={el.fill + el.height + el.width}
                >
                    <polygon
                        points={`${el.width * 0.2},0 ${el.width},0 ${el.width * 0.8},${
                            el.height
                        } 0,${el.height}`}
                        fill={el.fill}
                    />
                </svg>
            ))}
        </div>
    )
})

export default SvgAnimation
