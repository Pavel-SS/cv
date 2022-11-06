import React, { FormEvent, useRef } from "react";

import { AsideStyleType } from "../../main/Main";
import s from '../../aside/Aside.module.scss';
import style from './AsideContacts.module.scss';
import emailjs from '@emailjs/browser';


export const AsideContacts = (props: AsideStyleType) => {
    const form = useRef<any>();
    
    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        emailjs.sendForm('service_c8ypked', 'template_u5569s8', form.current, 'On7zTTltc9-wbDLiV')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          form.current.reset()
      };

    return (
        <aside className={props.className} id={'contacts'}>
            <form ref={form} className={`section ${s.aside__container}`} onSubmit={sendEmail}>
                <fieldset className={style.aside_contacts}>
                    <legend>Contacts</legend>
                    <label>
                        E-mail:
                        <input type="email" name="e-mail" placeholder="company@domain.by" required />
                    </label>
                    <label>
                        Phoe:
                        <input type="tel" name="tel" placeholder="+375(XX)XXX-XX-XX" required />
                    </label>
                    <label>
                        Massage:
                        <textarea name='message' className={style.message__txt}/>
                    </label>
                </fieldset>
                <button className={s.aside__btn} type="submit">Send</button>
            </form>
        </aside>
    )
}