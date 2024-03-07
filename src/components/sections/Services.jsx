import React, { useState } from 'react'

import BlockWrapper from '../common/BlockWrapper'
import SmallCard from '../cards/SmallCard'
import Card from '../cards/Card'
import SwitchButton from '../UI/buttons/SwitchButton'
import Button from '../UI/buttons/Button'
import GradientButton from '../UI/buttons/GradientButton'

import { cardsData, smallCardsData } from '../../mock/cards'

const switchElements = ['Для бизнеса', 'Для территории']

export default function Services() {
    const [switchButtonValue, setSwitchButtonValue] = useState(switchElements[0])

    return (
        <BlockWrapper className="services">
            <div className="services__header">
                <h2 className="services__title">Услуги</h2>
                <div className="services__switcher">
                    {switchElements.map((el) => (
                        <SwitchButton
                            key={el}
                            isActive={el === switchButtonValue}
                            onClick={() => setSwitchButtonValue(el)}
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
                    <Card key={el.title} {...el} />
                ))}
            </ul>
            <ul className="services__small-cards-list">
                {smallCardsData.map((el) => (
                    <SmallCard key={el.title} {...el} />
                ))}
            </ul>
            <Button wrapperClassName="services__button">Все услуги</Button>
            <GradientButton>Обсудить задачу</GradientButton>
        </BlockWrapper>
    )
}
