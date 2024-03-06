import React from 'react'

export default function GradientButton({ children, activateMouse, disableMouse }) {
    return (
        <button
            className="button-gradient"
            onMouseEnter={activateMouse}
            onMouseLeave={disableMouse}
        >
            {children}
        </button>
    )
}
