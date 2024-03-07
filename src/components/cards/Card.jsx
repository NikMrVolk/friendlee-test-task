import React, { useContext } from 'react'

import { LayoutContext } from '../../context/LayoutContext'

export default function Card({ svg, title, subtitle, text, tags }) {
    const { activationMouseHover, disableMouseHover } = useContext(LayoutContext)

    const svgElement = svg({ className: 'card__img' })

    return (
        <li
            className="card"
            key={title}
            onMouseEnter={activationMouseHover}
            onMouseLeave={disableMouseHover}
        >
            <div className="card__header">
                <h3 className="card__title">{title}</h3>
                <div className="card__image-wrapper">{svgElement}</div>
            </div>
            <p className="card__subtitle">{subtitle}</p>
            <p className="card__text">{text}</p>
            <ul className="card__tags-list">
                {tags.map((tag) => (
                    <li className="card__tag" key={tag}>
                        {tag}
                    </li>
                ))}
            </ul>
        </li>
    )
}
