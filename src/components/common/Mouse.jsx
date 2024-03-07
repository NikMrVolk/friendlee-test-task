import React, { useContext } from 'react'

import { useMousePosition } from '../../hooks/useMousePosition'
import { LayoutContext } from '../../context/LayoutContext'

export default function Mouse() {
    const {isMouseHover} = useContext(LayoutContext)
    const { left, top } = useMousePosition()

    return (
        <div
            className={`${isMouseHover ? 'cursor cursor_hover' : 'cursor'}`}
            style={{ top: `${top}px`, left: `${left}px` }}
        />
    )
}
