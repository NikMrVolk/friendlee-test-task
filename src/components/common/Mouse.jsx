import React from 'react'
import { useMousePosition } from '../../hooks/useMousePosition'

export default function Mouse({ isMouseHover }) {
    const { left, top } = useMousePosition()

    return (
        <div
            className={`${isMouseHover ? 'cursor cursor__hover' : 'cursor'}`}
            style={{ top: `${top}px`, left: `${left}px` }}
        />
    )
}
