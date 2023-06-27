import React from "react";
import s from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/Title";
import {Fade} from "react-awesome-reveal";


export const Skills = () => {

    return (
        <div className={s.skillsBlock} id="skills">
            <div className={`${styleContainer.container} ${s.skillsContainer} `}>
                <Fade>
                    <Title title={'skills'}/>
                    <div className={s.skills}>
                        <Skill title='React'
                               description={'mus soluta! Amet.'}/>
                        <Skill title='Redux'
                               description={'mus soluta! Amet.'}/>
                        <Skill title='TypeScript'
                               description={'possimus soluta! Amet.'}/>
                        <Skill title='JavaScript'
                               description={'icia! Amet.'}/>
                        <Skill title='Axios'
                               description={'Lorempisicing elit. Ad, temporibus!'}/>
                        <Skill title='API' description={'Lorem ipsum dolor sit amet'}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
};