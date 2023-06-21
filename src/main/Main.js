import React, {useEffect, useState} from "react";
import s from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import photo from '../assets/avatar.jpg'


export const Main = (props) => {
    const [text, setText] = useState("");
    const fullText = "frontend react developer";

    useEffect(() => {
        if (!text) {
            let currentIndex = 0;

            const intervalId = setInterval(() => {
                if (currentIndex === fullText.length) {
                    clearInterval(intervalId);
                } else {
                    const currentLetter = fullText[currentIndex];
                    setText((prevText) => prevText + currentLetter);
                    currentIndex++;
                }
            }, 100);

            return () => {
                clearInterval(intervalId);
            };
        }

    }, []);

    return (
        <div className={s.mainBlock} id='about'>
            <div className={`${styleContainer.container} ${s.mainContainer}`}>
                <div className={s.greeting}>
                    <span>Hi there! I am</span>
                    <h1>Alla Velychko</h1>
                    <span>I am <h5 className={s.greenText}>{text}</h5></span>
                </div>
                <div className={s.photo}>
                    <img src={photo} alt=""/>
                </div>
            </div>
        </div>
    );
};