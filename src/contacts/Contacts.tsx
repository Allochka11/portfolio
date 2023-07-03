import React, {ChangeEvent, useState} from "react";
import s from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import {Title} from "../common/components/Title";
import axios from "axios";
import {Fade} from "react-awesome-reveal";


export const Contacts = () => {
    const [submit, setSubmit] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [hasErrors, setHasErrors] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const validate = (value: string, fieldName: string) => {
            if (value.trim() === '') {
                return `Please enter a ${fieldName}`;
            }
            return '';
        };

        const validateEmail = (email: string, fieldName: string) => {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!re.test(email)) {
                return 'Please enter a valid email address';
            }
            return '';
        };

        let hasErrors = false;

        const newErrors = {
            name: validate(name, 'name'),
            email: validateEmail(email, 'email'),
            phone: validate(phone, 'phone'),
            message: validate(message, 'message')
        };

        hasErrors = Object.values(newErrors).some((error) => error !== '');

        setErrors(newErrors);
        setHasErrors(hasErrors);


        if (!hasErrors) {
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
                setSubmit(true);
                setName('');
                setMessage('');
                setEmail('');
                setPhone('');
            }).catch(e => {
                setError(e.response.data.errors[0].message);
            });
        }
    };

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
                <Fade>
                    <div className={`${styleContainer.container} ${s.contactsContainer} `}>
                        <Title title={'contacts'}/>
                        {errors.name || errors.email || errors.message || errors.phone}
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
                </Fade>
                : <div className={`${styleContainer.container} ${s.contactsContainer} `}>
                    <h4>Thanks for your message! I'll check my email and respond to you!</h4>
                </div>

            }


        </div>
    );
};
//
// import React, {ChangeEvent, useState} from "react";
// import s from "./Contacts.module.scss";
// import styleContainer from "../common/styles/Container.module.scss";
// import {Title} from "../common/components/Title";
// import axios from "axios";
// import {Fade} from "react-awesome-reveal";
//
// export const Contacts = () => {
//     const [submit, setSubmit] = useState(false);
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");
//     const [message, setMessage] = useState("");
//     const [errors, setErrors] = useState('');
//
// const validateEmail = (email: string) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
// };
//     const validatePhoneNumber = (phoneNumber: string) => {
//         const phoneRegex = /^\d{10}$/; // Пример: 1234567890
//         return phoneRegex.test(phoneNumber);
//     };
//
//
//     const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
//
//         e.preventDefault();
//
//         if (name.trim() !== '' && phone.trim() !== '' && email.trim() !== '' && message.trim() !== '') {
//             let res = axios({
//                 url: "https://formspree.io/f/mnqyeylw",
//                 method: "post",
//                 headers: {
//                     Accept: "application/json",
//                 },
//                 data: {
//                     name: name,
//                     email: email,
//                     message: message,
//                     phone: phone,
//                 },
//             });
//             console.log(res)
//             // .then(() => {
//             //     setSubmit(true);
//             //     setName("");
//             //     setMessage("");
//             //     setEmail("");
//             //     setPhone("");
//             // })
//             // .then(res => {
//             //     console.log(res)
//             // });
//         } else {
//             setErrors("Please enter a valid value")
//         }
//         const validateField = (value: string, errorMessage: string, validateFunc?: (value: string) => boolean) => {
//             if (value.trim() === "") {
//                 return errorMessage;
//             } else if (validateFunc && !validateFunc(value)) {
//                 return "Please enter a valid value";
//             }
//             return '';
//         }
//
//
//         const errors = {
//             name: validateField(name, "Please enter valid name"),
//             email: validateField(email, "Please enter valid email", validateEmail),
//             phone: validateField(phone, "Please enter valid phone", validatePhoneNumber),
//             message: validateField(message, "Please enter valid message")
//         };
//
//         let hasErrors = Object.values(errors).some(errors => errors);
//         console.log(hasErrors)
//
//
//         if (!hasErrors) {
//             // axios({
//             //     url: "https://formspree.io/f/mnqyeylw",
//             //     method: "post",
//             //     headers: {
//             //         Accept: "application/json",
//             //     },
//             //     data: {
//             //         name: name,
//             //         email: email,
//             //         message: message,
//             //         phone: phone,
//             //     },
//             // }).then(() => {
//             //     setSubmit(true);
//             //     setName("");
//             //     setMessage("");
//             //     setEmail("");
//             //     setPhone("");
//             // });
//         }
//         // setErrors(errors);
//     };
//
//     const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
//         const newName = e.target.value;
//         setName(newName);
//     };
//
//     const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
//         const newEmail = e.target.value;
//         setEmail(newEmail);
//     };
//
//     const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
//         const newPhone = e.target.value;
//         setPhone(newPhone);
//     };
//
//     const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
//         const newMessage = e.target.value;
//         setMessage(newMessage);
//     };
//
//     return (
//         <div className={s.contactsBlock} id="contacts">
//             {!submit ? (
//                 <Fade>
//                     <div className={`${styleContainer.container} ${s.contactsContainer}`}>
//                         <Title title={"contacts"}/>
//                         <form className={s.contacts}>
//                             <input
//                                 type="text"
//                                 placeholder="Name"
//                                 name="name"
//                                 onChange={handleNameChange}
//                                 value={name}
//                                 required
//                             />
//                             {/*{errors.name && <span className={s.error}>{errors.name}</span>}*/}
//                             <input
//                                 type="text"
//                                 placeholder="Phone"
//                                 name="phone"
//                                 required
//                                 onChange={handlePhoneChange}
//                                 value={phone}
//                             />
//                             <input
//                                 type="email"
//                                 placeholder="Email"
//                                 name="email"
//                                 required
//                                 value={email}
//                                 onChange={handleEmailChange}
//                             />
//                             {errors && <span className={s.error}>{errors}</span>}
//                             <textarea
//                                 name="message"
//                                 rows={6}
//                                 id=""
//                                 placeholder="Message"
//                                 required
//                                 onChange={handleMessageChange}
//                                 value={message}
//                             ></textarea>
//                             <button className={s.button} onClick={handleSubmit}>
//                                 Send
//                             </button>
//                         </form>
//                     </div>
//                 </Fade>
//             ) : (
//                 <div className={`${styleContainer.container} ${s.contactsContainer}`}>
//                     <h4>Thanks for your message! I'll check my email and respond to you!</h4>
//                 </div>
//             )}
//         </div>
//     );
// };
