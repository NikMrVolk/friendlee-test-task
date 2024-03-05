import React, { useState } from 'react'

import Mouse from '../components/common/Mouse'
import Header from '../components/header/Header'
import FirstScreen from '../components/sections/FirstScreen'
import { useMouseHover } from '../hooks/useMouseHover'
import EyeSvg from '../components/svg/EyeSvg'

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
                <FirstScreen />
                <section className="description block-wrapper">
                    <div className="description__body">
                        <p className="description__text">
                            Мы создаем <EyeSvg className="description__svg" />
                            уникальные бренды основываясь глубоком понимании потребителей
                        </p>
                    </div>
                </section>
            </main>
            <Mouse isMouseHover={isMouseHover} />
        </div>
    )
}
