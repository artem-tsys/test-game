import style from './header.module.scss';

export const Header = ({children}): JSX.Element => <header className={style.header}>{children}</header>;
