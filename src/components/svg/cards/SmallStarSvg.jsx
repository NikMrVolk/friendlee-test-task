import React from 'react'

export default function SmallStarSvg({ className = '' }) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 0L14.7153 9.28471L24 12L14.7153 14.7153L12 24L9.28471 14.7153L0 12L9.28471 9.28471L12 0Z"
                fill="#D8E6F1"
                className={className}
            />
        </svg>
    )
}
