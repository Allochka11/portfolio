import React from "react";
import s from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import {Project} from "./project/Project";
import {Title} from "../common/components/Title";
// @ts-ignore
import todoImg from '../assets/todo.jpeg';
// @ts-ignore
import socialImg from '../assets/social.jpeg';
import {Fade, Reveal, Slide} from "react-awesome-reveal";


export const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImg})`
    }
    const todo = {
        backgroundImage: `url(${todoImg})`
    }

    return (
        <div className={s.projectsBlock} id='projects'>
            <Fade>
                <div className={`${styleContainer.container} ${s.projectsContainer} `}>
                    <Title title={'projects'}/>
                    <div className={s.projects}>
                        <Project style={social} title='Social network' description='description'
                                 url={'https://allochka11.github.io/samurai/'}/>
                        <Project
                            style={todo} title='Todolist'
                            url={'https://allochka11.github.io/it-incubator-todolist-ts/'}
                            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
};