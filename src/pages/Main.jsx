import React, { useState } from 'react'

import Mouse from '../components/common/Mouse'
import Header from '../components/header/Header'
import FirstScreen from '../components/sections/FirstScreen'
import EyeSvg from '../components/svg/EyeSvg'
import Ticker from '../components/UI/Ticker'
import { useMouseHover } from '../hooks/useMouseHover'
import { useScrollY } from '../hooks/useScrollY'

const tickerElements = [
    'Место для экспертизы и творчества',
    'Место для экспертизы и творчества',
    'Место для экспертизы и творчества',
    'Место для экспертизы и творчества',
    'Место для экспертизы и творчества',
    'Место для экспертизы и творчества',
    'Место для экспертизы и творчества',
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
                <FirstScreen />
                <section className="description block-wrapper">
                    <div className="description__body">
                        <p className="description__text">
                            Мы создаем <EyeSvg className="description__svg" />
                            уникальные бренды основываясь глубоком понимании потребителей
                        </p>
                    </div>
                    <div className="description__ticker">
                        <Ticker
                            elements={tickerElements}
                            classes={{
                                wrapper: 'description__ticker-wrapper',
                                element: 'description__ticker-element',
                                imgWrapper: 'description__ticker-image-wrapper',
                            }}
                            imgSrc="/public/arrow2.svg"
                            imgAlt="стрелка"
                            style={{
                                transform: `rotate(${5 - scrollY / 140}deg) translateX(${
                                    scrollY / 3
                                }px) translateY(${scrollY / 6}px)`,
                            }}
                        />
                    </div>
                </section>
            </main>
            <Mouse isMouseHover={isMouseHover} />
        </div>
    )
}
