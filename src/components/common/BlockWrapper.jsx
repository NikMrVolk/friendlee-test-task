import React from 'react'

export default function BlockWrapper({ children, className }) {
    return (
        <section className={className ? `${className + ' block-wrapper'}` : 'block-wrapper'}>
            {children}
        </section>
    )
}
