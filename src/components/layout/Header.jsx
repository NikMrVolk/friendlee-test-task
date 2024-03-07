import React from 'react'

import Burger from '../UI/Burger'
import SmallLogo from '../common/SmallLogo'

import { useScrollingUp } from '../../hooks/useScrollingUp'
import HeaderNavigation from '../header/HeaderNavigation'

export default function Header() {
    const isScrollingUp = useScrollingUp()

    return (
        <header className={`header block-wrapper ${isScrollingUp ? 'header_isActive' : ''}`}>
            <SmallLogo classes={{ wrapperLink: 'header__logo', img: 'header__logo-img' }} />
            <Burger wrapperClassName="header__burger" />
            <HeaderNavigation />
        </header>
    )
}
