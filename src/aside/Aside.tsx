import React from "react";

import '../GeneralStyle.scss';

type StyleType = {
    className: string
}
export const Aside = (props:StyleType) => {
    return (
       <div className={props.className}>
           <div className="section">
               
           </div>
       </div> 
    )
}