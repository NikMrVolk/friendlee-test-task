import React from 'react'

export default function NavLink({ href = '#', wrapperClassName = '', text }) {
    return (
        <a
            href={href}
            className={`${wrapperClassName ? 'nav-link ' + wrapperClassName : 'nav-link'}`}
        >
            <div>
                <div className="nav-link__text-top">{text}</div>
                <div className="nav-link__text-bottom">{text}</div>
            </div>
        </a>
    )
}
