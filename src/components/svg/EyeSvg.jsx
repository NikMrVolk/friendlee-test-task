import React from 'react'

export default function EyeSvg({ className = '' }) {
    return (
        <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <circle cx="26" cy="26" r="24.5" stroke="#D8E6F1" strokeWidth="3" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 26.1429C6 26.1429 17.9401 14.7144 26 14.7144C34.0599 14.7144 46 26.1429 46 26.1429C46 26.1429 34.0599 37.5715 26 37.5715C17.9401 37.5715 6 26.1429 6 26.1429ZM25.9714 33.3431C29.9321 33.3431 33.1428 30.1323 33.1428 26.1717C33.1428 22.211 29.9321 19.0002 25.9714 19.0002C22.0107 19.0002 18.8 22.211 18.8 26.1717C18.8 30.1323 22.0107 33.3431 25.9714 33.3431Z"
                fill="#D8E6F1"
            />
        </svg>
    )
}
