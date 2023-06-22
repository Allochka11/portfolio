import React, {ChangeEvent, useState} from "react";
import s from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import {Title} from "../common/components/Title";
import axios from "axios";


export const Contacts = () => {

    const [submit, setSubmit] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    // const emailCheck = (e) => {
    //     const email = e.target.value;
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //
    //     if (emailRegex.test(email)) {
    //         setEmail(email);
    //     } else {
    //         alert('Ошибка!')
    //         // Введенное значение не является действительным адресом электронной почты
    //         // Можно выполнить соответствующие действия, например, показать сообщение об ошибке
    //     }
    // };
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        axios({
            url: 'https://formspree.io/f/mnqyeylw',
            method: 'post',
            headers: {
                'Accept': 'application/json'
            },
            data: {
                name: name,
                email: email,
                message: message,
                phone: phone,
            }
        }).then(() => {
            setSubmit(true)
            setName('');
            setMessage('');
            setEmail('');
            setPhone('');
        });
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newName = e.target.value;
        setName(newName);
    };
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
    };
    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newPhone = e.target.value;
        setPhone(newPhone);
    };
    const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newMessage = e.target.value;
        setMessage(newMessage);
    };


    return (
        <div className={s.contactsBlock} id='contacts'>
            {!submit ?
                <div className={`${styleContainer.container} ${s.contactsContainer} `}>
                    <Title title={'contacts'}/>
                    <form className={s.contacts}>
                        <input type="text" placeholder='Name' name='name' onChange={handleNameChange} value={name}
                               required/>
                        <input type="text" placeholder='Phone' name='phone' required onChange={handlePhoneChange}
                               value={phone}/>
                        <input type="email" placeholder='Email' name='email' required value={email}
                               onChange={handleEmailChange}/>
                        <textarea name="message" rows={6} id="" placeholder='Message' required
                                  onChange={handleMessageChange} value={message}

                        ></textarea>
                        <button className={s.button} onClick={handleSubmit}>
                            Send
                        </button>

                    </form>
                </div>
                : <div className={`${styleContainer.container} ${s.contactsContainer} `}>
                    <h4>Thanks for your message! I'll check my email and respond to you!</h4>
                </div>

            }


        </div>
    );
};