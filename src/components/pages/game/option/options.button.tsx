import cn from 'classnames';
import React, {ReactNode} from 'react';
import {useAppSelector} from '../../../../hooks/redux';
import {answerStatusSelector} from '../../../../redux/common/common.selectors';
import {Border} from '../../../shared/border/border';
import {Letters} from '../../../../constants/game.constants';
import style from './options.module.scss';

interface IOptionButtonProp {
  id: string;
  handlerClick: (id) => void;
  children: ReactNode;
  answerId: string;
  indexLetter: number;
}

export const OptionButton = ({handlerClick, id, children, answerId, indexLetter}: IOptionButtonProp): JSX.Element => {
  const answerStatus = useAppSelector(answerStatusSelector);
  const isSelect = answerId === id;

  const classes =
    isSelect &&
    cn({
      [style.button_selected]: answerStatus === 'selected',
      [style.button_correct]: answerStatus === 'correct',
      [style.button_wrong]: answerStatus === 'wrong',
    });

  return (
    <button
      type="button"
      onClick={() => handlerClick(id)}
      className={cn(style.button, classes)}
    >
      <span className={style.letter}>{Letters[indexLetter]}</span>
      {children}
      <Border />
    </button>
  );
};
