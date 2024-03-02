import { useEffect, useState } from 'react'

export const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ left: 0, top: 0 })

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                left: e.pageX - 12,
                top: e.pageY - 12,
            })
        }

        window.addEventListener('mousemove', mouseMove)

        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    return mousePosition
}
