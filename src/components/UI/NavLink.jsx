import React from 'react'

export default function NavLink({
    href = '#',
    wrapperClassName = '',
    text,
    activateMouse,
    disableMouse,
}) {
    return (
        <a
            href={href}
            className={`${wrapperClassName ? 'nav-link ' + wrapperClassName : 'nav-link'}`}
            onMouseEnter={activateMouse}
            onMouseLeave={disableMouse}
        >
            <div>
                <div className="nav-link__text-top">{text}</div>
                <div className="nav-link__text-bottom">{text}</div>
            </div>
        </a>
    )
}
