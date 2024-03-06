import React from 'react'

export default function ArrowSvg({ className = '' }) {
    return (
        <svg
            width={70}
            height={70}
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx={35} cy={35} r={33} stroke="#D8E6F1" strokeWidth={4} className={className} />
            <path
                d="M47.354 26.8228C43.2364 26.8082 35.0011 24.3054 35.0011 14.4107M35.0011 14.4107C35.0011 24.3054 26.7658 26.8082 22.6481 26.8228M35.0011 14.4107L35.0011 55.5889"
                stroke="#D8E6F1"
                strokeWidth={4}
                className={className}
            />
        </svg>
    )
}
