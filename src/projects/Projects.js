import React from "react";
import s from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";


export const Projects = (props) => {

    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer} `}>
                <h2 className={s.title}>Projects</h2>
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