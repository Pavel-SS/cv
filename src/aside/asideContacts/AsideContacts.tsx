import React from "react";

import { AsideStyleType } from "../../main/Main";
import s from '../../aside/Aside.module.scss';
import style from './AsideContacts.module.scss';

export const AsideContacts = (props: AsideStyleType) => {
    return (
        <aside className={props.className} id={'contacts'}>
            <form className={`section ${s.aside__container}`}>
                <fieldset className={`${style.aside_contacts}`}>
                    <legend>Contacts</legend>
                    <label>
                        E-mail:
                        <input type="email" name="e-mail" placeholder="company@domain.by" required />
                    </label>
                    <label>
                        Phoe:
                        <input type="tel" name="tel" placeholder="+375(25)XXX-XX-XX" required />
                    </label>
                </fieldset>
                <button className={s.aside__btn} name="submit">Send</button>
            </form>
        </aside>
    )
}