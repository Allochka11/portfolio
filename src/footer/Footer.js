import React from "react";
import s from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css'


export const Footer = (props) => {

    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer} `}>
                <h3 className={s.title}>Alla Velychko</h3>
                <div className={s.footer}>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                </div>
                <span>© 2022 All rights reserved</span>
            </div>
        </div>
    );
};