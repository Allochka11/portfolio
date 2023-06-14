import React from "react";
import s from './Project.module.css';


export const Project = (props) => {

    return (
        <div className={s.project}>
            <div className={s.imgContainer}>
                <div className={s.button}><a href="#">Open project</a></div>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};