import React from "react";

import s from '././../aside/Aside.module.scss';
import style from './Footer.module.scss'

import GitHubLogo from './../assets/icon/github.svg';
import LinkedInLogo from './../assets/icon/linkedin.svg';
import TelegramLogo from './../assets/icon/telegram.svg';

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={`section ${s.footer__container}`}>
                <div className={s.footer__title}>
                    <h2>
                        Sasnouski Pavel
                    </h2>
                </div>
                <ul className={style.footer__link_contacts}>
                    <li>
                        <a href="https://github.com/Pavel-SS" className={style.footer__link_contact} title="link to https://github.com/Pavel-SS">
                            <img src = {GitHubLogo} alt="GitHub" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className={style.footer__link_contact}>
                            <img src={LinkedInLogo} alt="LinkedIn" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className={style.footer__link_contact}>
                            <img src={TelegramLogo} alt="Telegram" />
                        </a>
                    </li>
                </ul>
                <p>
                    © 2022 All rights reserved 
                </p>
            </div>
        </footer>
    )
}