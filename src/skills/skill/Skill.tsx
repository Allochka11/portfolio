import React from "react";
import s from './Skill.module.scss';


export const Skill = (props: { title: string, description?: string, style: { backgroundImage: string; } }) => {

    return (
        <div className={s.skill}>
            <div className={s.icon} style={props.style}></div>
            <h4 className={s.title}>{props.title}</h4>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};