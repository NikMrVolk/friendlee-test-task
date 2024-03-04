import React, { useState } from 'react'

import Mouse from '../components/common/Mouse'
import Header from '../components/header/Header'
import LogoSvg from '../components/svg/LogoSvg'
import { useMouseHover } from '../hooks/useMouseHover'
import Ticker from '../components/UI/Ticker'

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
                    <h1 className="first-screen__title">Агентство территориального брендинга</h1>
                    <LogoSvg
                        wrapperClassName="first-screen__logo-wrapper"
                        elClassName="first-screen__logo-el"
                    />
                    <Ticker
                        customText="Для"
                        elements={tickerTexts}
                        wrapperClassName="first-screen__ticker"
                        imgSrc="/public/arrow.svg"
                        imgAlt="стрелка"
                    />
                </section>
                <section className="description"></section>
            </main>
            <Mouse isMouseHover={isMouseHover} />
        </div>
    )
}
