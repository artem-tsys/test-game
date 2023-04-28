import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import {priceSelector} from '../../../redux/common/common.selectors';
import {RESET_GAME} from '../../../redux/common/common.slice';
import Button from '../../shared/buttons/button';
import style from './gameOver.module.scss';

export const GameOver = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const money = useAppSelector(priceSelector);
  const handlerClick = () => {
    dispatch(RESET_GAME());
  };

  return (
    <div className={style.container}>
      <img
        src="/hand.png"
        className={style.image}
        alt="hand supper"
      />
      <div className={style.content}>
        <p className={style.label}>Total score:</p>
        <h1 className={style.title}>{money} earned</h1>
        <Link
          to="/"
          className={style.button}
        >
          <Button onClick={handlerClick}>Try again</Button>
        </Link>
      </div>
    </div>
  );
};
