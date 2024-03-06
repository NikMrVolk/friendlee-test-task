import React, { useState } from 'react'

import Mouse from '../components/common/Mouse'
import Header from '../components/header/Header'
import FirstScreen from '../components/sections/FirstScreen'
import Description from '../components/sections/Description'
import BlockWrapper from '../components/common/BlockWrapper'
import SwitchButton from '../components/UI/buttons/SwitchButton'
import Card from '../components/cards/Card'
import SmallCard from '../components/cards/SmallCard'
import { useMouseHover } from '../hooks/useMouseHover'
import { cardsData, smallCardsData } from '../mock/cards'
import Button from '../components/UI/buttons/Button'
import GradientButton from '../components/UI/buttons/GradientButton'

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
                    <ul
                        className={`services__card-list ${
                            switchButtonValue === switchElements[0]
                                ? 'services__card-list_show'
                                : 'services__card-list_hide'
                        }`}
                    >
                        {cardsData.map((el) => (
                            <Card
                                key={el.title}
                                {...el}
                                activateMouse={activationMouseHover}
                                disableMouse={disableMouseHover}
                            />
                        ))}
                    </ul>
                    <ul className="services__small-cards-list">
                        {smallCardsData.map((el) => (
                            <SmallCard
                                key={el.title}
                                {...el}
                                activateMouse={activationMouseHover}
                                disableMouse={disableMouseHover}
                            />
                        ))}
                    </ul>
                    <Button
                        activateMouse={activationMouseHover}
                        disableMouse={disableMouseHover}
                        wrapperClassName="services__button"
                    >
                        Все услуги
                    </Button>
                    <GradientButton
                        activateMouse={activationMouseHover}
                        disableMouse={disableMouseHover}
                    >
                        Обсудить задачу
                    </GradientButton>
                </BlockWrapper>
                <div style={{ height: '100vh' }}></div>
                <div style={{ height: '100vh' }}></div>
            </main>
            <Mouse isMouseHover={isMouseHover} />
        </div>
    )
}
