import React, {useState} from "react";
import s from './BurgerNav.module.scss';

export const BurgerNav = () => {
    const [activeTab, setActiveTab] = useState('');
    const [isOpenBtn, setIsOpenBtn] = useState(false);

    const scrollToSection = (event: React.MouseEvent, selector: string) => {
        event.preventDefault();
        setActiveTab(selector);
        const section = document.querySelector(`#${selector}`);
        section?.scrollIntoView({behavior: 'smooth'})
    };

    const onBtnClickHandler = () => {
        setIsOpenBtn(!isOpenBtn);
    }

    return (
        <div className={s.burgerNav}>
            <div className={isOpenBtn ? `${s.burgerNavItems}  ${s.show}  ` : s.burgerNavItems}
            >
                <a href="/#" className={activeTab === 'about' ? s.active : ''}
                   onClick={(e) => scrollToSection(e, 'about')}
                >About</a>
                <a href="/#" className={activeTab === 'skills' ? s.active : ''}
                   onClick={(e) => scrollToSection(e, 'skills')}>Skills</a>
                <a href="/#" className={activeTab === 'projects' ? s.active : ''}
                   onClick={(e) => scrollToSection(e, 'projects')}>Projects</a>
                <a href="/#" className={activeTab === 'contacts' ? s.active : ''}
                   onClick={(e) => scrollToSection(e, 'contacts')}>Contacts</a>
            </div>
            <div className={s.burgerBtn} onClick={onBtnClickHandler}>
                <span className={s.line}></span>
                <span className={s.line}></span>
                <span className={s.line}></span>
            </div>
        </div>
    );
};