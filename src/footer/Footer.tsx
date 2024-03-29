import React from "react";

import s from '././../aside/Aside.module.scss';
import style from './Footer.module.scss'

import GitHubLogo from './../assets/icon/github.svg';
import LinkedInLogo from './../assets/icon/linkedin.svg';
import TelegramLogo from './../assets/icon/telegram.svg';
import CV from './../assets/icon/clipboard.svg'
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
                        <a href="https://www.linkedin.com/in/pavel-sosnovskiy-0013" className={style.footer__link_contact}>
                            <img src={LinkedInLogo} alt="LinkedIn" />
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/Pavel_13S" className={style.footer__link_contact}>
                            <img src={TelegramLogo} alt="Telegram" />
                        </a>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/1K-SjbtfcjlShM-MiaHKXA7hp2hqSDlpG/view?usp=drivesdk" className={style.footer__link_contact}>
                            <img src={CV} alt="CV" />
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