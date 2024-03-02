import React from 'react'

import BlockWrapper from '../components/common/BlockWrapper'
import Mouse from '../components/common/Mouse'

export default function Main() {
    return (
        <div className="main-page">
            <header>
                <BlockWrapper>
                    <ul className="list">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>
                </BlockWrapper>
            </header>
            <Mouse />
        </div>
    )
}
