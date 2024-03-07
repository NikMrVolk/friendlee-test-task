import React, { useState } from 'react'

import Mouse from '../components/common/Mouse'
import Header from '../components/header/Header'
import FirstScreen from '../components/sections/FirstScreen'
import Description from '../components/sections/Description'
import Services from '../components/sections/Services'
import Footer from '../components/layout/Footer'
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
                <Services activateMouse={activationMouseHover} disableMouse={disableMouseHover} />
            </main>
            <Footer activateMouse={activationMouseHover} disableMouse={disableMouseHover} />
            <Mouse isMouseHover={isMouseHover} />
        </div>
    )
}
