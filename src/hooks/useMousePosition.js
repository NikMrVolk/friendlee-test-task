import { useEffect, useState } from 'react'

export const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ left: null, top: null })

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                left: e.pageX - 12,
                top: e.pageY - window.pageYOffset - 12,
            })
        }

        window.addEventListener('mousemove', mouseMove)

        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    return mousePosition
}
