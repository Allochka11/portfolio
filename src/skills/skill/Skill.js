import React from "react";
import s from './Skill.module.scss';

export const Skill = (props) => {

    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h4 className={s.title}>{props.title}</h4>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};