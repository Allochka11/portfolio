import React from "react";
import s from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/Title";
import {Fade} from "react-awesome-reveal";
import reactImg from '../assets/react.svg';
import reduxImg from '../assets/redux.svg';
import apiImg from '../assets/api.svg';
import cssImg from '../assets/css.svg';
import githubImg from '../assets/github.svg';
import htmlImg from '../assets/html.svg';
import scssImg from '../assets/sass.svg';
import jsImg from '../assets/js.svg';
import postmanImg from '../assets/postman.svg';
import storybookImg from '../assets/storybook.svg';
import typescriptImg from '../assets/typescript.svg';
import axiosImg from '../assets/axios1.svg';
import muiImg from '../assets/mui.svg';


export const Skills = () => {
    const react = {
        backgroundImage: `url(${reactImg})`
    }
    const redux = {
        backgroundImage: `url(${reduxImg})`
    }
    const api = {
        backgroundImage: `url(${apiImg})`
    }

    const css = {
        backgroundImage: `url(${cssImg})`
    }
    const github = {
        backgroundImage: `url(${githubImg})`
    }
    const html = {
        backgroundImage: `url(${htmlImg})`
    }
    const scss = {
        backgroundImage: `url(${scssImg})`
    }
    const js = {
        backgroundImage: `url(${jsImg})`
    }
    const postman = {
        backgroundImage: `url(${postmanImg})`
    }
    const storybook = {
        backgroundImage: `url(${storybookImg})`
    }
    const typescript = {
        backgroundImage: `url(${typescriptImg})`
    }
    const axios = {
        backgroundImage: `url(${axiosImg})`
    }
    const mui = {
        backgroundImage: `url(${muiImg})`
    }


    return (
        <div className={s.skillsBlock} id="skills">
            <div className={`${styleContainer.container} ${s.skillsContainer} `}>
                <Fade>
                    <Title title={'skills'}/>
                    <div className={s.skills}>
                        <Skill title='HTML' style={html}/>
                        <Skill title='CSS' style={css}/>
                        <Skill title='SCSS' style={scss}/>
                        <Skill title='JS' style={js}/>
                        <Skill title='Typescript' style={typescript}/>
                        <Skill title='React' style={react}/>
                        <Skill title='Redux' style={redux}/>
                        <Skill title='API' style={api}/>
                        <Skill title='Axios' style={axios}/>
                        <Skill title='Postman' style={postman}/>
                        <Skill title='GitHub' style={github}/>
                        <Skill title='Storybook' style={storybook}/>
                        <Skill title='Material-UI' style={mui}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
};