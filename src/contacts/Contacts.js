import React from "react";
import s from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css'


export const Contacts = (props) => {

    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer} `}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.contacts}>
                    <input type="text" placeholder='Name'/>
                    <input type="text" placeholder='Phone'/>
                    <textarea name="" id="" cols="2" rows="6" placeholder='Message'></textarea>
                </form>
                <button>Send</button>
            </div>
        </div>
    );
};