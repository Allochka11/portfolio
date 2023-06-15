import React from "react";
import s from './Nav.module.css';

export const Nav= () => {
    const scrollToSection = (event, sectionId) => {
        event.preventDefault();
        const section = document.querySelector(`#${sectionId}`);
        section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={s.nav}>
            <a href="" onClick={(e) => scrollToSection(e, 'about')}>About</a>
            <a href="" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a>
            <a href="" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a>
            <a href="" onClick={(e) => scrollToSection(e, 'contacts')}>Contacts</a>
        </div>
    );
};