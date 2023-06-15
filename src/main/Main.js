import React from "react";
import s from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'


export const Main = (props) => {

    return (
        <div className={s.mainBlock} id='about'>
            <div className={`${styleContainer.container} ${s.mainContainer}`}>
                <div className={s.greeting}>
                    <span>Hi there! I am</span>
                    <h1>Alla Velychko</h1>
                    <p>I am <span className={s.greenText}>frontend react developer</span></p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};