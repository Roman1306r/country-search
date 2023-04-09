import React from "react";
import dark from "../../assets/images/dark.png";
import light from "../../assets/images/light.png";



const Header = ({darkMode, setDarkMode, setTheme, theme}) => {

    function setLightTheme() {
        localStorage.setItem('theme', 'App')
        localStorage.setItem('darkMode', 'false')
        setDarkMode(false)
        setTheme('App')
    }
    function setDarkTheme() {
        localStorage.setItem('theme', 'App dark')
        localStorage.setItem('darkMode', 'true')
        setDarkMode(true)
        setTheme('App dark')
    }

    return <header className="header">
                <h1>Where in the world?</h1>
                {darkMode && <span onClick={setLightTheme}><img src={light} alt="dark" /> Dark mode</span>}
                {!darkMode && <span onClick={setDarkTheme}><img src={dark} alt="light" /> Light mode</span>}
           </header>
}

export default Header;