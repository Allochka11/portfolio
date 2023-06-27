import React from "react";
import s from './Nav.module.scss';
// import {Link} from "react-scroll";

export const Nav = () => {

    // const scrollToSection = (event: React.MouseEvent, selector: string) => {
    //     event.preventDefault();
    //     const section = document.querySelector(`#${selector}`);
    //     section?.scrollIntoView({behavior: 'smooth'})
    // };

    return (
        <div className={s.nav}>
            <a href="/#about">About</a>

            <a href="/#skills">Skills</a>
            <a href="/#projects">Projects</a>
            {/*<Link to="projects"*/}

            {/*/>*/}
            <a href="/#contacts">Contacts</a>
        </div>
    );
};