import { useEffect, useState } from 'react'

export const useScrollingUp = () => {
    const [isScrollingUp, setIsScrollingUp] = useState(true)

    useEffect(() => {
        let lastScrollPosition = window.pageYOffset

        const handleScroll = () => {
            const currentScrollPosition = window.pageYOffset
            if (currentScrollPosition < lastScrollPosition) {
                setIsScrollingUp(true)
            } else {
                setIsScrollingUp(false)
            }
            lastScrollPosition = currentScrollPosition
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return isScrollingUp
}
