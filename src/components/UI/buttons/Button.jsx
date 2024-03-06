import React from 'react'

export default function Button({ activateMouse, disableMouse, children, wrapperClassName }) {
    return (
        <button
            className={`${wrapperClassName ? 'button ' + wrapperClassName : 'button'}`}
            onMouseEnter={activateMouse}
            onMouseLeave={disableMouse}
        >
            <div className="button__body">
                <div className="button__text-top">{children}</div>
                <div className="button__text-bottom">{children}</div>
            </div>
        </button>
    )
}
