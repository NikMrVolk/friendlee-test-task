import React, { useContext } from 'react'

import FirstScreen from '../components/sections/FirstScreen'
import Description from '../components/sections/Description'
import Services from '../components/sections/Services'
import { LayoutContext } from '../context/LayoutContext'

export default function Main() {
    const { activationMouseHover, disableMouseHover } = useContext(LayoutContext)

    return (
        <main>
            <FirstScreen />
            <Description />
            <Services activateMouse={activationMouseHover} disableMouse={disableMouseHover} />
        </main>
    )
}
