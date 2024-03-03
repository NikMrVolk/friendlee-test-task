import React, { useState } from 'react'

import Mouse from '../components/common/Mouse'
import Header from '../components/header/Header'

export default function Main() {
    const [isBurgerActive, setIsBurgerActive] = useState(false)

    return (
        <div className={`${isBurgerActive ? 'main-page main-page-lock' : 'main-page'}`}>
            <Header isBurgerActive={isBurgerActive} setIsBurgerActive={setIsBurgerActive} />
            <div className="mesto">Место</div>
            <Mouse />
        </div>
    )
}
