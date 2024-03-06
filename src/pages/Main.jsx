import React, { useState } from 'react'

import Mouse from '../components/common/Mouse'
import Header from '../components/header/Header'
import FirstScreen from '../components/sections/FirstScreen'
import Description from '../components/sections/Description'
import BlockWrapper from '../components/common/BlockWrapper'
import SwitchButton from '../components/UI/buttons/SwitchButton'
import { useMouseHover } from '../hooks/useMouseHover'

const switchElements = ['Для бизнеса', 'Для территории']

export default function Main() {
    const [isBurgerActive, setIsBurgerActive] = useState(false)
    const { isMouseHover, activationMouseHover, disableMouseHover } = useMouseHover()
    const [switchButtonValue, setSwitchButtonValue] = useState(switchElements[0])

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
                        <div className="services__switcher">
                            {switchElements.map((el) => (
                                <SwitchButton
                                    key={el}
                                    isActive={el === switchButtonValue}
                                    onClick={() => setSwitchButtonValue(el)}
                                    activateMouse={activationMouseHover}
                                    disableMouse={disableMouseHover}
                                >
                                    {el}
                                </SwitchButton>
                            ))}
                        </div>
                    </div>
                </BlockWrapper>
            </main>
            <Mouse isMouseHover={isMouseHover} />
        </div>
    )
}
