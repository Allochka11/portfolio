import React from "react";
import s from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/Title";


export const Skills = (props) => {

    return (
        <div className={s.skillsBlock} id="skills">
            <div className={`${styleContainer.container} ${s.skillsContainer} `}>
                <Title title={'skills'}/>
                <div className={s.skills}>
                    <Skill title='React'
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem labore natus nobis possimus soluta! Amet.'}/>
                    <Skill title='React'
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem labore natus nobis possimus soluta! Amet.'}/>
                    <Skill title='React'
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem labore natus nobis possimus soluta! Amet.'}/>
                    <Skill title='Js'
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, temporibus!'}/>
                    <Skill title='Ts' description={'Lorem ipsum dolor sit amet'}/>
                </div>
            </div>
        </div>
    );
};