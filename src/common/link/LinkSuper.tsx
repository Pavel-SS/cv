import { Link } from 'react-scroll';
import style from './../link/linkSuper.module.scss';

type LinkSuperPropsType = {
    name?: string;
    anchor: string;
    offset: number;
    onClick?: () => void;
}

export const LinkSuper = ({name, anchor, offset, onClick}: LinkSuperPropsType) => {
    return (
        <Link 
            className={style.link_active} 
            to={anchor} 
            offset={offset} 
            spy={true} 
            smooth={true} 
            duration={500}
            onClick={onClick}
        >
            {name}
        </Link>
    )
}