import React from 'react'

import Ticker from '../UI/Ticker'
import LogoSvg from '../svg/LogoSvg'
import SvgAnimation from '../animation/SvgAnimation'
import { useScrollY } from '../../hooks/useScrollY'

const tickerTexts = [
    'бизнеса',
    'города',
    'человека',
    'бренда',
    'идеи',
    'будущего',
    'роста',
    'успеха',
    'шага вперед',
]

export default function FirstScreen() {
    const scrollY = useScrollY(0)


    return (
        <section className="first-screen block-wrapper">
            <div
                className="first-screen__body"
                style={{
                    transform: `translateY(-${scrollY / 3}px)`,
                }}
            >
                <div className="first-screen__title-logo-wrapper">
                    <h1 className="first-screen__title">Агентство территориального брендинга</h1>
                    <LogoSvg
                        wrapperClassName="first-screen__logo-wrapper"
                        elClassName="first-screen__logo-el"
                    />
                </div>
                <Ticker
                    customText="Для"
                    elements={tickerTexts}
                    wrapperClassName="first-screen__ticker"
                    imgSrc="/public/arrow.svg"
                    imgAlt="стрелка"
                    style={{
                        transform: `rotate(${5 - scrollY / 150}deg) translateX(${scrollY / 3}px)`,
                    }}
                />
            </div>
            <SvgAnimation />
        </section>
    )
}
