import React from 'react'

import SmallStarSvg from '../svg/cards/SmallStarSvg'

export default function SmallCard({ title, description, activateMouse, disableMouse }) {
    return (
        <li className="small-card" onMouseEnter={activateMouse} onMouseLeave={disableMouse}>
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
