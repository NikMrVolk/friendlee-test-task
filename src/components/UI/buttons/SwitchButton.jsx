import React, { useContext } from 'react'

import { LayoutContext } from '../../../context/LayoutContext'

export default function SwitchButton({ children, isActive, onClick }) {
    const { activationMouseHover, disableMouseHover } = useContext(LayoutContext)

    return (
        <button
            className={`${isActive ? 'switch-button switch-button_active' : 'switch-button'}`}
            onClick={onClick}
            onMouseEnter={activationMouseHover}
            onMouseLeave={disableMouseHover}
        >
            {children} <span className="switch-button__counter">6</span>
        </button>
    )
}
