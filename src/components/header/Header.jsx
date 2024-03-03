import React from 'react'

import NavLink from '../UI/NavLink'
import Burger from '../UI/Burger'

export default function Header({ isBurgerActive, setIsBurgerActive }) {
    return (
        <header className="header block-wrapper">
            <a href="/" className="header__logo">
                <img src="./logo.png" alt="logo" className="header__logo-img" />
            </a>
            <Burger
                wrapperClassName="header__burger"
                isBurgerActive={isBurgerActive}
                onToggle={(e) => setIsBurgerActive(e.target.checked)}
            />
            <nav className={`${isBurgerActive ? 'header__nav header__nav-show' : 'header__nav'}`}>
                <ul className="header__nav-list">
                    <li className="header__nav-element">
                        <NavLink text="Услуги" wrapperClassName="header__nav-link" />
                    </li>
                    <li className="header__nav-element">
                        <NavLink text="Кейсы" wrapperClassName="header__nav-link" />
                    </li>
                    <li className="header__nav-element">
                        <NavLink text="Контакты" wrapperClassName="header__nav-link" />
                    </li>
                </ul>
                <button className="header__button button">Кнопка</button>
            </nav>
        </header>
    )
}
