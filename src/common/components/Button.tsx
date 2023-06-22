import React from "react";
import s from './Button.module.scss';

export const Button = (props: { title: string }) => {

    return (
        <div className={s.button}>{props.title}</div>
    );
};