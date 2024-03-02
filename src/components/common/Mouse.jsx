import React from 'react'
import { useMousePosition } from '../../hooks/useMousePosition'

export default function Mouse() {
    const { left, top } = useMousePosition()

    return <div className="cursor" style={{ top: `${top}px`, left: `${left}px` }} />
}
