import React from "react";
import s from './DistantWork.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Title} from "../common/components/Title";
import {Button} from "../common/components/Button";
import {Fade} from "react-awesome-reveal";

export const DistantWork = () => {
    return (
        <div className={s.distantWorkBlock}>
            <Fade>
                <div className={`${styleContainer.container} ${s.distantWorkContainer}`}>
                    <Title title={"I'am looking for distant work"}/>
                    <a href="/#contacts"><Button title={'Hire me'}/></a>
                </div>
            </Fade>
        </div>
    );
};