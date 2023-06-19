import React from "react";
import s from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/components/Title";


export const Contacts = (props) => {

    return (
        <div className={s.contactsBlock} id='contacts'>
            <div className={`${styleContainer.container} ${s.contactsContainer} `}>
                <Title title={'contacts'}/>
                <form className={s.contacts}>
                    <input type="text" placeholder='Name'/>
                    <input type="text" placeholder='Phone'/>
                    <textarea name="" id="" cols="2" rows="6" placeholder='Message'></textarea>
                </form>
                <button className={s.button}>Send</button>
            </div>
        </div>
    );
};