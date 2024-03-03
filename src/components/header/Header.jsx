import React from 'react'

export default function Header({ isBurgerActive, setIsBurgerActive }) {
    return (
        <header className="header block-wrapper">
            <a href="/" className="header__logo">
                <img src="./logo.png" alt="logo" className="header__logo-img" />
            </a>
            <label
                className="header__burger burger"
                onChange={(e) => setIsBurgerActive(e.target.checked)}
            >
                <input type="checkbox" name="burger-checkbox" className='burger__checkbox' />
                burger
            </label>
            <nav className={`${isBurgerActive ? 'header__nav header__nav-show' : 'header__nav'}`}>
                <ul className="header__nav-list">
                    <li className="header__nav-element">
                        <a href="#" className="header__nav-link">
                            Услуги
                        </a>
                    </li>
                    <li className="header__nav-element">
                        <a href="#" className="header__nav-link">
                            Кейсы
                        </a>
                    </li>
                    <li className="header__nav-element">
                        <a href="#" className="header__nav-link">
                            Контакты
                        </a>
                    </li>
                </ul>
                <button className="header__button button">Кнопка</button>
            </nav>
        </header>
    )
}
