import {Link} from 'react-router-dom';
import Button from '../../shared/buttons/button';
import style from './gameStart.module.scss';

export const GameStart = (): JSX.Element => (
  <div className={style.container}>
    <img
      src="/hand.png"
      className={style.image}
      alt="hand supper"
    />
    <div className={style.content}>
      <h1 className={style.title}>
        Who wants to be <br />a millionaire?
      </h1>
      <Link
        to="/game"
        className={style.button}
      >
        <Button>Start</Button>
      </Link>
    </div>
  </div>
);
