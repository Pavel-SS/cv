import React from "react";
import { LinkSuper } from "../../common/link/LinkSuper";

type NavPropsType = {
    style: string
    onClick?: () => void
}

export const Nav: React.FC<NavPropsType> = ({style, onClick}) => {
    return (
            <nav className={style}>
                <LinkSuper name={'abaut me'} anchor={'aboutMe'} offset={-20} onClick={onClick}/>
                <LinkSuper name={'skills'} anchor={'skills'} offset={0} onClick={onClick}/>
                <LinkSuper name={'project'} anchor={'project'} offset={0} onClick={onClick}/>
                <LinkSuper name={'contacts'} anchor={'contacts'} offset={50} onClick={onClick}/>
            </nav>
    )
}