import React from "react";
import s from './Header.module.scss';
import {Nav} from "../nav/Nav";

export const Header = (props) => {

    return (
        <div className={s.header}>
            <Nav/>
        </div>
    );
};