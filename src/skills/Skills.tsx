import React from "react";
import s from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/Title";
import {Fade} from "react-awesome-reveal";
import reactImg from '../assets/react.svg'
import reduxImg from '../assets/redux.svg'
import apiImg from '../assets/api.svg'
// import cssImg from '../assets/css.svg'


export const Skills = () => {
    const react = {
        backgroundImage: `url(${reactImg})`
    }
    const redux = {
        backgroundImage: `url(${reduxImg})`
    }
    const api = {
        backgroundImage: `url(${apiImg})`
    }
    // const css = {
    //     backgroundImage: `url(${cssImg})`
    // }

    return (
        <div className={s.skillsBlock} id="skills">
            <div className={`${styleContainer.container} ${s.skillsContainer} `}>
                <Fade>
                    <Title title={'skills'}/>
                    <div className={s.skills}>
                        <Skill title='React' style={react}/>
                        <Skill title='Redux' style={redux}/>
                        <Skill title='API' style={api}/>
                        {/*<Skill title='CSS' style={css}/>*/}

                    </div>
                </Fade>
            </div>
        </div>
    );
};