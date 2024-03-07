import React, { useContext } from 'react'

import SmallStarSvg from '../svg/cards/SmallStarSvg'

import { LayoutContext } from '../../context/LayoutContext'

export default function SmallCard({ title, description }) {
    const { activationMouseHover, disableMouseHover } = useContext(LayoutContext)

    return (
        <li
            className="small-card"
            onMouseEnter={activationMouseHover}
            onMouseLeave={disableMouseHover}
        >
            <div className="small-card__header">
                <h3 className="small-card__title">{title}</h3>
                <div className="small-card__image-wrapper">
                    <SmallStarSvg className="small-card__img" />
                </div>
            </div>
            <p className="small-card__text">{description}</p>
        </li>
    )
}
