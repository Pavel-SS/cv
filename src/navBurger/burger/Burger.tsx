import s from "./burger.module.scss"

type BurgerPropsType = {
    onClick?: () => void;
    styles: string;
    isOpen: boolean
}
export const Burger = ({onClick, styles, isOpen}: BurgerPropsType) => {
    return (
        <div className={styles} onClick={onClick}>
            <div className={isOpen ? s.burger__open : ''}></div>
            <div className={isOpen ? s.burger__open : ''}></div>
            <div className={isOpen ? s.burger__open : ''}></div>
        </div>
    )
}