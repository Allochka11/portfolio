import React from "react";
import s from './DistantWork.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/components/Title";


export const DistantWork = (props) => {

    return (
        <div className={s.distantWorkBlock}>
            <div className={`${styleContainer.container} ${s.distantWorkContainer}`}>
                <Title title={"I'am looking for distant work"}/>

                <div className={s.button}><a href="#">Hire me</a></div>
            </div>

        </div>
    );
};