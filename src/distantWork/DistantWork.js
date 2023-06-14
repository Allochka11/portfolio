import React from "react";
import s from './DistantWork.module.css'
import styleContainer from '../common/styles/Container.module.css'


export const DistantWork = (props) => {

    return (
        <div className={s.distantWorkBlock}>
            <div className={`${styleContainer.container} ${s.distantWorkContainer}`}>
                <h2 className={s.title}>I'am looking for distant work</h2>
                <div className={s.button}><a href="#">Hire me</a></div>
            </div>

        </div>
    );
};