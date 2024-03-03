import React from 'react'

export default function Burger({ wrapperClassName = '', isBurgerActive, onToggle }) {
    return (
        <label
            className={`${wrapperClassName ? 'burger ' + wrapperClassName : 'burger'} `}
            onChange={onToggle}
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
