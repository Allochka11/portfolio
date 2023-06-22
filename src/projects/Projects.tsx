import React from "react";
import s from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import {Project} from "./project/Project";
import {Title} from "../common/components/Title";
import todoImg from '../assets/todo.jpeg';
import socialImg from '../assets/social.jpeg';


export const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImg})`
    }
    const todo = {
        backgroundImage: `url(${todoImg})`
    }

    return (
        <div className={s.projectsBlock} id='projects'>
            <div className={`${styleContainer.container} ${s.projectsContainer} `}>
                <Title title={'projects'}/>

                <div className={s.projects}>
                    <Project style={social} title='Social network' description='description'/>
                    <Project style={todo} title='Todolist'
                             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                </div>
            </div>
        </div>
    );
};