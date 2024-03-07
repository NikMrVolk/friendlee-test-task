import React, { useContext } from 'react'

import { LayoutContext } from '../../../context/LayoutContext'

export default function GradientButton({ children }) {
    const { activationMouseHover, disableMouseHover } = useContext(LayoutContext)

    return (
        <button
            className="button-gradient"
            onMouseEnter={activationMouseHover}
            onMouseLeave={disableMouseHover}
        >
            {children}
        </button>
    )
}
