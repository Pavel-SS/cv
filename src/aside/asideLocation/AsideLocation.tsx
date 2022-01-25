import React from "react";

import { AsideStyleType } from "../../main/Main";
import s from '../../aside/Aside.module.scss';
import style from './AsideLocation.module.scss'

export const AsideLocation = (props: AsideStyleType) => {
    return (
        <aside className={props.className}>
             <div className={`section  ${s.aside__container}`}>
                   <div className={`${style.aside__location_block} ${s.aside__title}`}>
                       <h2>Looking into remote work options</h2>
                        <button>hire me</button>
                   </div>
                    
            </div>
        </aside>
    )
}