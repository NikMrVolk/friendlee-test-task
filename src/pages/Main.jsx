import React, { useState } from 'react'

import Mouse from '../components/common/Mouse'
import Header from '../components/header/Header'
import LogoSvg from '../components/svg/LogoSvg'
import Ticker from '../components/UI/Ticker'
import SvgAnimation from '../components/animation/SvgAnimation'
import { useMouseHover } from '../hooks/useMouseHover'
import { useScrollY } from '../hooks/useScrollY'

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

export default function Main() {
    const [isBurgerActive, setIsBurgerActive] = useState(false)
    const { isMouseHover, activationMouseHover, disableMouseHover } = useMouseHover()
    const scrollY = useScrollY(0)

    return (
        <div className={`${isBurgerActive ? 'main-page main-page-lock' : 'main-page'}`}>
            <Header
                isBurgerActive={isBurgerActive}
                setIsBurgerActive={setIsBurgerActive}
                activateMouse={activationMouseHover}
                disableMouse={disableMouseHover}
            />
            <main>
                <section className="first-screen block-wrapper">
                    <div
                        className="first-screen__body"
                        style={{
                            transform: `translateY(-${scrollY / 3}px)`,
                        }}
                    >
                        <div className="first-screen__title-logo-wrapper">
                            <h1 className="first-screen__title">
                                Агентство территориального брендинга
                            </h1>
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
                                transform: `rotate(${5 - scrollY / 150}deg) translateX(${
                                    scrollY / 3
                                }px)`,
                            }}
                        />
                    </div>
                    <SvgAnimation />
                </section>
                <section className="description"></section>
            </main>
            <Mouse isMouseHover={isMouseHover} />
        </div>
    )
}
