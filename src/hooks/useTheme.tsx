import { useEffect, useState } from 'react'

type theme = 'dark' | 'light'

const useTheme = () => {
    // const [theme, setTheme] = useState<theme>(() => {
    //     if (localStorage.theme) return localStorage.theme
    //     return window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light'
    // })
    const [theme, setTheme] = useState<theme>('light')

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
