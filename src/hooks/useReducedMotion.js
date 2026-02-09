import { useState, useEffect } from "react"

export const useReducedMotion = () => {
    const [isReduced, setIsReduced] = useState(false)

    useEffect(() => {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)')

        const handleChange = () => {
            setIsReduced(prefersReduced.matches)
        }

        handleChange()
        prefersReduced.addEventListener('change', handleChange)

        return () => {
            prefersReduced.removeEventListener('change', handleChange)
        }
    }, [])


    return isReduced
}
