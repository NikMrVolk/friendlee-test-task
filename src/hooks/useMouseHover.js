import { useState } from 'react'

export const useMouseHover = () => {
    const [isMouseHover, setIsMouseHover] = useState(false)

    const activationMouseHover = () => setIsMouseHover(true)
    const disableMouseHover = () => setIsMouseHover(false)

    return { isMouseHover, activationMouseHover, disableMouseHover }
}
