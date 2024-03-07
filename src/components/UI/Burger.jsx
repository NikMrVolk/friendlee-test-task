import React, { useContext } from 'react'

import { LayoutContext } from '../../context/LayoutContext'

export default function Burger({ wrapperClassName = '' }) {
    const { activationMouseHover, disableMouseHover, isBurgerActive, setIsBurgerActive } =
        useContext(LayoutContext)

    return (
        <label
            className={`${wrapperClassName ? 'burger ' + wrapperClassName : 'burger'} `}
            onChange={(e) => setIsBurgerActive(e.target.checked)}
            onMouseEnter={activationMouseHover}
            onMouseLeave={disableMouseHover}
        >
            <input type="checkbox" name="burger-checkbox" className="burger__checkbox" />
            <div
                className={`${
                    isBurgerActive ? 'burger__body burger__body-active' : 'burger__body'
                }`}
            >
                <span />
                <span />
                <span />
            </div>
        </label>
    )
}
