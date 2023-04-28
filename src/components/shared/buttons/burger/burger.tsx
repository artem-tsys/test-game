import cn from 'classnames';
import style from './burger.module.scss';

interface IBurgerProps {
  classnames?: string;
  handler: () => void;
}

export const Burger = ({handler, classnames}: IBurgerProps): JSX.Element => (
  <button
    onClick={handler}
    className={cn(style.burger, classnames)}
  >
    <span />
    <span />
    <span />
  </button>
);
