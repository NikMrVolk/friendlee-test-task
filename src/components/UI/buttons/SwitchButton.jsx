import React from 'react'

export default function SwitchButton({ children, isActive, onClick, activateMouse, disableMouse }) {
    return (
        <button
            className={`${isActive ? 'switch-button switch-button_active' : 'switch-button'}`}
            onClick={onClick}
            onMouseEnter={activateMouse}
            onMouseLeave={disableMouse}
        >
            {children} <span className="switch-button__counter">6</span>
        </button>
    )
}
