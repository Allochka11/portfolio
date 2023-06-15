import React from "react";
import s from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../common/components/Title";


export const Projects = (props) => {

    return (
        <div className={s.projectsBlock} id='projects'>
            <div className={`${styleContainer.container} ${s.projectsContainer} `} >
                <Title title={'projects'}/>

                <div className={s.projects}>
                    <Project title='Name of project' description='description'/>
                    <Project title='Name of project' description='description'/>
                    <Project title='Name of project' description='description'/>
                    <Project title='Name of project' description='description'/>
                    <Project title='Name of project' description='description'/>
                    <Project title='Name of project' description='description'/>
                </div>
            </div>
        </div>
    );
};