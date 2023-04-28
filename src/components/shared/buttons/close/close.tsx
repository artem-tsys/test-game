import cn from 'classnames';
import React from 'react';
import style from './close.module.scss';

interface ICloseProps {
  classnames?: string;
  onClick: () => void;
}

export const Close = ({onClick, classnames}: ICloseProps): JSX.Element => (
  <button
    onClick={onClick}
    aria-label="Close"
    className={cn(style.button, classnames)}
  />
);
