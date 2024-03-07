import React, { useState } from 'react'

import Footer from './Footer'
import Mouse from '../common/Mouse'
import Header from './Header'

import { LayoutContext } from '../../context/LayoutContext'
import { useMouseHover } from '../../hooks/useMouseHover'

export default function Layout({ children }) {
    const [isBurgerActive, setIsBurgerActive] = useState(false)
    const { isMouseHover, activationMouseHover, disableMouseHover } = useMouseHover()

    return (
        <LayoutContext.Provider value={{ activationMouseHover, disableMouseHover }}>
            <div className={`${isBurgerActive ? 'main-page main-page-lock' : 'main-page'}`}>
                <Header
                    isBurgerActive={isBurgerActive}
                    setIsBurgerActive={setIsBurgerActive}
                    activateMouse={activationMouseHover}
                    disableMouse={disableMouseHover}
                />
                {children}
                <Footer
                    activationMouseHover={activationMouseHover}
                    disableMouseHover={disableMouseHover}
                />
                <Mouse isMouseHover={isMouseHover} />
            </div>
        </LayoutContext.Provider>
    )
}
