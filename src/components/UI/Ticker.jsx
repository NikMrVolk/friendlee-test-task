import React from 'react'

export default function Ticker({ wrapperClassName, customText, elements, imgSrc, imgAlt }) {
    return (
        <div className={`${wrapperClassName ? 'ticker ' + wrapperClassName : 'ticker'}`}>
            {elements.map((el) => (
                <div className="ticker__body" key={el}>
                    <span>{customText}</span>
                    <span>{el}</span>
                    <span>
                        <img src={imgSrc} alt={imgAlt} />
                    </span>
                </div>
            ))}
        </div>
    )
}
