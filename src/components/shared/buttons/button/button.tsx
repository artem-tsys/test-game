import cn from 'classnames';
import {ReactNode} from 'react';
import style from './button.module.scss';

interface IButtonProps {
  onClick?: () => void;
  classes?: string;
  children?: ReactNode;
}

export const Button = ({classes, onClick, children}: IButtonProps): JSX.Element => (
  <button
    onClick={onClick}
    className={cn(classes, style.button)}
  >
    {children}
  </button>
);
