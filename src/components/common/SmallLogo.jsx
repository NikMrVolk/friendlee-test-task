import React, { useContext } from 'react'

import { LayoutContext } from '../../context/LayoutContext'

export default function SmallLogo({ classes }) {
    const { activationMouseHover, disableMouseHover } = useContext(LayoutContext)

    return (
        <a
            href="/"
            className={classes.wrapperLink}
            onMouseEnter={activationMouseHover}
            onMouseLeave={disableMouseHover}
        >
            <img src="./logo.svg" alt="logo" className={classes.img} />
        </a>
    )
}
