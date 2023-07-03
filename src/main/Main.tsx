import React from "react";
import s from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import ParticlesContainer from "../common/components/Particles";
import Typewriter from "react-ts-typewriter";
import {Tilt} from 'react-tilt'

export const Main = () => {

    return (
        <div className={s.mainBlock} id='about'>
            <ParticlesContainer/>
            <div className={`${styleContainer.container} ${s.mainContainer}`}>
                <div className={s.greeting}>
                    <span>Hi there! I am</span>
                    <h1>Alla Velychko</h1>
                    I am <h5 className={s.greenText}>
                    <Typewriter text={'React Developer'} speed={100}/>
                </h5>
                </div>
                <div className={s.photo}>
                    <Tilt>
                        <div className={s.image}></div>
                    </Tilt>
                </div>
            </div>
        </div>
    );
};