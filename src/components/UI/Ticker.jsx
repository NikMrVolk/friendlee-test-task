import React from 'react'

export default function Ticker({
    wrapperClassName,
    classes = { wrapper: '', tickerBody: '', custom: '', element: '', imgWrapper: '' },
    customText,
    elements,
    imgSrc,
    imgAlt,
    style = {},
}) {
    return (
        <div
            className={`${classes.wrapper ? 'ticker ' + classes.wrapper : 'ticker'}`}
            style={style}
        >
            {elements.map((el, id) => (
                <div
                    key={el + id}
                    className={`${classes.tickerBody ? 'ticker__body ' + classes.tickerBody : 'ticker__body'}`}
                >
                    <span className={classes.custom}>{customText}</span>
                    <span className={classes.element}>{el}</span>
                    <span className={classes.imgWrapper}>
                        <img src={imgSrc} alt={imgAlt} />
                    </span>
                </div>
            ))}
        </div>
    )
}
