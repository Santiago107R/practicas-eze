import type { Theme } from '@/types/theme'
import { useEffect, useState } from 'react'

const useTheme = () => {
    const [theme, setTheme] = useState(() => {
        return (localStorage.getItem('theme')) as Theme || 'light'
    })

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
    }

    useEffect(() => {
        const root = window.document.documentElement

        if (theme === 'dark') {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }

        localStorage.setItem('theme', theme)
    }, [theme])

    return {
        theme,
        toggleTheme,
    }
}

export default useTheme