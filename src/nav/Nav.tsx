import React, {useState} from "react";
import s from './Nav.module.scss';

export const Nav = () => {
    const [activeTab, setActiveTab] = useState('');

    const scrollToSection = (event: React.MouseEvent, selector: string) => {
        event.preventDefault();
        setActiveTab(selector);
        const section = document.querySelector(`#${selector}`);
        section?.scrollIntoView({behavior: 'smooth'})
    };

    return (
        <div className={s.nav}>
            <a href="/#" className={activeTab === 'about' ? s.active : ''}
               onClick={(e) => scrollToSection(e, 'about')}>About</a>
            <a href="/#" className={activeTab === 'skills' ? s.active : ''}
               onClick={(e) => scrollToSection(e, 'skills')}>Skills</a>
            <a href="/#" className={activeTab === 'projects' ? s.active : ''}
               onClick={(e) => scrollToSection(e, 'projects')}>Projects</a>
            <a href="/#" className={activeTab === 'contacts' ? s.active : ''}
               onClick={(e) => scrollToSection(e, 'contacts')}>Contacts</a>
        </div>
    );
};