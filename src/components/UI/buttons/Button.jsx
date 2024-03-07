import React, { useContext } from 'react'

import { LayoutContext } from '../../../context/LayoutContext'

export default function Button({children, wrapperClassName }) {
    const { activationMouseHover, disableMouseHover } = useContext(LayoutContext)

    return (
        <button
            className={`${wrapperClassName ? 'button ' + wrapperClassName : 'button'}`}
            onMouseEnter={activationMouseHover}
            onMouseLeave={disableMouseHover}
        >
            <div className="button__body">
                <div className="button__text-top">{children}</div>
                <div className="button__text-bottom">{children}</div>
            </div>
        </button>
    )
}
