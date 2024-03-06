import React from 'react'

export default function GlobeSvg({ className = '' }) {
    return (
        <svg
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="35" cy="35" r="33" stroke="#D8E6F1" strokeWidth="4" className={className} />

            <path
                d="M2.73438 35H66.9922"
                stroke="#D8E6F1"
                strokeWidth="4"
                strokeLinecap="round"
                className={className}
            />
            <path
                d="M47.7656 35C47.7656 44.4642 46.1434 52.9381 43.5981 58.9713C42.3238 61.992 40.8575 64.3071 39.3314 65.8371C37.813 67.3595 36.351 68 35 68C33.649 68 32.187 67.3595 30.6686 65.8371C29.1425 64.3071 27.6762 61.992 26.4019 58.9713C23.8566 52.9381 22.2344 44.4642 22.2344 35C22.2344 25.5358 23.8566 17.0619 26.4019 11.0287C27.6762 8.00801 29.1425 5.69291 30.6686 4.16286C32.187 2.64055 33.649 2 35 2C36.351 2 37.813 2.64055 39.3314 4.16286C40.8575 5.69291 42.3238 8.00801 43.5981 11.0287C46.1434 17.0619 47.7656 25.5358 47.7656 35Z"
                stroke="#D8E6F1"
                strokeWidth="4"
                className={className}
            />
        </svg>
    )
}
