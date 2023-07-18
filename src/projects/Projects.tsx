import React from "react";
import s from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import {Project} from "./project/Project";
import {Title} from "../common/components/Title";
import todoImg from '../assets/todo.jpeg';
import socialImg from '../assets/social.jpeg';
import {Fade} from "react-awesome-reveal";


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
                        <Project style={social} title='Social network' description='Created SPA with user pages, pagination, login, using React,
                         Redux, TypeScript, Axios, API, CRUD, React Router, and Redux Form. In progress.'
                                 url={'https://allochka11.github.io/samurai/'}/>
                        <Project
                            style={todo} title='Todolist'
                            url={'https://allochka11.github.io/it-incubator-todolist-ts/'}
                            description={'Created an SPA with a todo list, login/logout using React, Redux, Ts, Axios, API, CRUD, and Formik. In progress.'}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
};