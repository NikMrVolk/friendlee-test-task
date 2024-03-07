import React, { useContext } from 'react'

import { LayoutContext } from '../../context/LayoutContext'

export default function NavLink({ href = '#', wrapperClassName = '', text }) {
    const { activationMouseHover, disableMouseHover } = useContext(LayoutContext)

    return (
        <a
            href={href}
            className={`${wrapperClassName ? 'nav-link ' + wrapperClassName : 'nav-link'}`}
            onMouseEnter={activationMouseHover}
            onMouseLeave={disableMouseHover}
        >
            <div>
                <div className="nav-link__text-top">{text}</div>
                <div className="nav-link__text-bottom">{text}</div>
            </div>
        </a>
    )
}
