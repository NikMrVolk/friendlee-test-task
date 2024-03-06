import React, { useState } from 'react'

import Mouse from '../components/common/Mouse'
import Header from '../components/header/Header'
import FirstScreen from '../components/sections/FirstScreen'
import Description from '../components/sections/Description'
import BlockWrapper from '../components/common/BlockWrapper'
import { useMouseHover } from '../hooks/useMouseHover'

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
                <Description />
                <BlockWrapper className="services">
                    <div className="services__header">
                        <h2 className="services__title">Услуги</h2>
                        <div className="services__switcher"></div>
                    </div>
                </BlockWrapper>
            </main>
            <Mouse isMouseHover={isMouseHover} />
        </div>
    )
}
