import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import {useOptions} from '../../../hooks/useOptions';
import {answerStatusSelector, countQuestionsSelector} from '../../../redux/common/common.selectors';
import {NEXT_QUESTION, SET_ANSWER_STATUS} from '../../../redux/common/common.slice';
import {questionSelector} from '../../../redux/questions/question.selectors';
import {OptionButton} from './option/options.button';
import style from './game.module.scss';

export const Round = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const question = useAppSelector(questionSelector);
  const countQuestions = useAppSelector(countQuestionsSelector);
  const answerStatus = useAppSelector(answerStatusSelector);
  const options = useOptions(question?.options || []);
  const [answerId, setAnswerId] = useState<string>();

  const handlerSlick = useCallback((id: string) => {
    dispatch(SET_ANSWER_STATUS('selected'));
    setAnswerId(id);
  }, []);

  useEffect(() => {
    if (countQuestions < question?.complexity) {
      navigate('/gameOver');
    }
  }, [question, countQuestions]);

  useEffect(() => {
    switch (answerStatus) {
      case 'selected':
        setTimeout(() => {
          const isSuccess = question.answer.includes(answerId);
          const nextStatus = isSuccess ? 'correct' : 'wrong';

          dispatch(SET_ANSWER_STATUS(nextStatus));
        }, 2000);
        break;
      case 'correct':
        setTimeout(() => {
          dispatch(NEXT_QUESTION());
          setAnswerId(null);
        }, 1000);
        break;
      case 'wrong':
        setTimeout(() => {
          navigate('/gameOver');
        }, 1000);
        break;
    }
  }, [question, answerStatus]);

  if (!question) return null;

  return (
    <div className={style.content}>
      <h1 className={style.question}>{question.title}</h1>
      <div className={style.options}>
        {options &&
          options.map(({id, text}, i) => (
            <OptionButton
              key={id}
              id={id}
              handlerClick={handlerSlick}
              answerId={answerId}
              indexLetter={i}
            >
              {text}
            </OptionButton>
          ))}
      </div>
    </div>
  );
};
