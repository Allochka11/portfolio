import React from "react";
import s from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import ParticlesContainer from "../common/components/Particles";
import {Fade} from "react-awesome-reveal";
import ReactTypingEffect from "react-typing-effect";
import Typewriter from "react-ts-typewriter";
import {Tilt} from 'react-tilt'

export const Main = () => {

    return (
        <div className={s.mainBlock} id='about'>
            <ParticlesContainer/>
            <div className={`${styleContainer.container} ${s.mainContainer}`}>
                <Fade>
                    <div className={s.greeting}>
                        <span>Hi there! I am</span>
                        <h1>Alla Velychko</h1>
                        I am <h5 className={s.greenText}>
                        <Typewriter text={'React Developer eerveerevevre'}/>
                    </h5>

                    </div>

                    <div className={s.photo}>
                        <Tilt>
                            <div className={s.image}></div>
                        </Tilt>
                    </div>


                </Fade>
            </div>
        </div>
    );
};