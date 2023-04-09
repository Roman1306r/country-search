import './App.css';
import React, {useEffect, useRef, useState} from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {checkDarkMode, checkTheme} from "./common/utils/utils";


function App() {

    const [darkMode, setDarkMode] = useState(() => checkDarkMode())
    const [theme, setTheme] = useState(() => checkTheme())
    let up = useRef()
    let upTo = useRef()

    useEffect(() => {
        window.addEventListener('scroll', scrollUp)
        function scrollUp(event) {
            return window.pageYOffset > 400 ? up.current.className = 'up active' : up.current.className = 'up';
        }
    }, [window.pageYOffset])




  return (<div className={theme}>
            <div ref={upTo}></div>
            <Header theme={theme} setTheme={setTheme} darkMode={darkMode} setDarkMode={setDarkMode} />
            <Main />

            <div onClick={() => upTo.current.scrollIntoView({behavior: 'smooth'})} ref={up} className="up">Scroll up</div>
        </div>);
}

export default App;
