import React from "react";
import s from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'


export const Main = (props) => {

    return (
        <div className={s.mainBlock}>
            <div className={`${styleContainer.container} ${s.mainContainer}`}>
                <div className={s.greeting}>
                    <span>Hi there!</span>
                    <h1>I am Alla Velychko</h1>
                    <p>I am frontend developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};