import React, {useEffect, useState} from "react";
import s from './App.scss';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {DistantWork} from "./distantWork/DistantWork";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    window.onload = () => {
        setIsLoading(false);
    };

    if (isLoading) {
        return (
            <div className={s.preloaderContainer}>
            </div>
        );
    }

    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <DistantWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
