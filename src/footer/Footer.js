import React from "react";
import s from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import {faReact, faTelegram} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";
import {faViber} from "@fortawesome/free-brands-svg-icons/faViber";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";


export const Footer = (props) => {

    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer} `}>
                <h2 className={s.title}>Alla Velychko</h2>
                <div className={s.footerIcons}>
                    <a href="sms:+380951529370"><FontAwesomeIcon className={s.icon} icon={faPhone} /></a>
                    <a href="tel:+380951529370">
                        <FontAwesomeIcon className={s.icon} icon={faTelegram} />
                    </a>
                    <a href="viber://chat?number=+380951529370">
                        <FontAwesomeIcon className={s.icon} icon={faViber} />
                    </a>
                    <a href="https://www.linkedin.com/in/alla-velychko/" target="_blank">
                        <FontAwesomeIcon className={s.icon} icon={faLinkedin} />
                    </a>

                    <a href="mailto:allavelychko11@gmail.com">
                        <FontAwesomeIcon className={s.icon} icon={faEnvelope}/>
                    </a>

                </div>
                <span className={s.copyright}>© 2023  All rights reserved</span>
            </div>
        </div>
    );
};