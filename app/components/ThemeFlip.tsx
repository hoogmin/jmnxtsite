"use client"

import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect } from "react"

const ThemeFlip = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const setLightMode = () => {
        document.querySelector("body")?.setAttribute("data-theme", "light")
        document.querySelector("body")?.setAttribute("data-bs-theme", "light") // Bootstrap has its own theme, should look more into this...
        setIsDarkMode(false)
        localStorage.setItem("selectedTheme", "light")
    }

    const setDarkMode = () => {
        document.querySelector("body")?.setAttribute("data-theme", "dark")
        document.querySelector("body")?.setAttribute("data-bs-theme", "dark")
        setIsDarkMode(true)
        localStorage.setItem("selectedTheme", "dark")
    }

    const isDark = () => {
        const currentTheme = document.querySelector("body")?.getAttribute("data-theme")

        if (currentTheme === "dark")
            return true
        else
            return false
    }
    
    const toggleTheme = () => {
        if (isDark()) {
            setLightMode()
        } else {
            setDarkMode()
        }
    }
    
    useEffect(() => {
        const selectedTheme = localStorage.getItem("selectedTheme")

        if (selectedTheme === "dark") {
            setDarkMode()
        }
    }, [])

    return (
        <>
            <button className="icon-button" onClick={toggleTheme}>
                <FontAwesomeIcon
                icon={isDarkMode ? faSun : faMoon}
                />
            </button>
        </>
    )
}

export default ThemeFlip