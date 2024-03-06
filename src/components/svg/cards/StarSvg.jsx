import React from 'react'

export default function StarSvg({ className = '' }) {
    return (
        <svg
            width={70}
            height={70}
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M35 0L35 70" stroke="#D8E6F1" strokeWidth={4} className={className} />
            <path
                d="M0 34.9998L70 34.9998"
                stroke="#D8E6F1"
                strokeWidth={4}
                className={className}
            />
            <path
                d="M10.2524 10.2512L59.7499 59.7487"
                stroke="#D8E6F1"
                strokeWidth={4}
                className={className}
            />
            <path
                d="M59.7471 10.2512L10.2496 59.7487"
                stroke="#D8E6F1"
                strokeWidth={4}
                className={className}
            />
        </svg>
    )
}
