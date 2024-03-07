import React from 'react'

import Ticker from '../UI/Ticker'
import EyeSvg from '../svg/EyeSvg'
import BlockWrapper from '../common/BlockWrapper'
import { useScrollY } from '../../hooks/useScrollY'

const tickerElements = [
    'Место для экспертизы и творчества',
    'Место для экспертизы и творчества',
    'Место для экспертизы и творчества',
    'Место для экспертизы и творчества',
    'Место для экспертизы и творчества',
    'Место для экспертизы и творчества',
    'Место для экспертизы и творчества',
]

export default function Description() {
    const scrollY = useScrollY(0)

    return (
        <BlockWrapper className="description">
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
                        }px) translateY(${scrollY / 8.5}px)`,
                    }}
                />
            </div>
        </BlockWrapper>
    )
}
