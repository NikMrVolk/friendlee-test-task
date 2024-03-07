import React, { useContext } from 'react'

import NavLink from '../UI/NavLink'
import Button from '../UI/buttons/Button'

import { LayoutContext } from '../../context/LayoutContext'

const navElements = ['Услуги', 'Кейсы', 'Контакты']

export default function HeaderNavigation() {
    const { isBurgerActive } = useContext(LayoutContext)

    return (
        <nav className={`${isBurgerActive ? 'header__nav header__nav-show' : 'header__nav'}`}>
            <ul className="header__nav-list">
                {navElements.map((el) => (
                    <li className="header__nav-element" key={el}>
                        <NavLink text={el} wrapperClassName="header__nav-link" />
                    </li>
                ))}
            </ul>
            <Button wrapperClassName="header__button">Обсудить задачу</Button>
        </nav>
    )
}
