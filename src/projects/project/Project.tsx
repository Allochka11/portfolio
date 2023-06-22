import React from "react";
import s from './Project.module.scss';
import {Button} from "../../common/components/Button";

type ProjectPropsType = {
    style: { backgroundImage: string; }
    title: string
    description: string
}

export const Project = (props: ProjectPropsType) => {

    return (
        <div className={s.project}>
            <div className={s.imgContainer} style={props.style}>
                {/*<div className={s.button}><a href="#">Open</a></div>*/}
                <a href="/#" className={s.button}><Button title={'Open'}/></a>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
};