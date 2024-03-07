import React from 'react'

import FirstScreen from '../components/sections/FirstScreen'
import Description from '../components/sections/Description'
import Services from '../components/sections/Services'

export default function Main() {
    return (
        <main>
            <FirstScreen />
            <Description />
            <Services />
        </main>
    )
}
