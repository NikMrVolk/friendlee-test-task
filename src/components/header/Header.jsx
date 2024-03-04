import React from 'react'

import NavLink from '../UI/NavLink'
import Burger from '../UI/Burger'
import Button from '../UI/Button'

import { useScrollingUp } from '../../hooks/useScrollingUp'

const navElements = ['Услуги', 'Кейсы', 'Контакты']

export default function Header({ isBurgerActive, setIsBurgerActive, activateMouse, disableMouse }) {
    const isScrollingUp = useScrollingUp()

    return (
        <header className={`header block-wrapper ${isScrollingUp ? 'header_isActive' : ''}`}>
            <a
                href="/"
                className="header__logo"
                onMouseEnter={activateMouse}
                onMouseLeave={disableMouse}
            >
                <img src="./logo.svg" alt="logo" className="header__logo-img" />
            </a>
            <Burger
                wrapperClassName="header__burger"
                isBurgerActive={isBurgerActive}
                onToggle={(e) => setIsBurgerActive(e.target.checked)}
                activateMouse={activateMouse}
                disableMouse={disableMouse}
            />
            <nav className={`${isBurgerActive ? 'header__nav header__nav-show' : 'header__nav'}`}>
                <ul className="header__nav-list">
                    {navElements.map((el) => (
                        <li className="header__nav-element" key={el}>
                            <NavLink
                                text={el}
                                wrapperClassName="header__nav-link"
                                activateMouse={activateMouse}
                                disableMouse={disableMouse}
                            />
                        </li>
                    ))}
                </ul>
                <Button
                    wrapperClassName="header__button"
                    activateMouse={activateMouse}
                    disableMouse={disableMouse}
                >
                    Обсудить задачу
                </Button>
            </nav>
        </header>
    )
}
