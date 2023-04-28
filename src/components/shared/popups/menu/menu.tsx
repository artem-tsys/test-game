import {useAppDispatch} from '../../../../hooks/redux';
import {HIDE_MODAL} from '../../../../redux/modal/modal.slice';
import {Close} from '../../buttons/close/close';
import {Header} from '../../header/header';
import {Progress} from '../../progress/progress';
import style from './menu.module.scss';

export const Menu = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(HIDE_MODAL());
  };

  return (
    <div className={style.popup}>
      <Header>
        <Close onClick={handleClick} />
      </Header>
      <div className={style.content}>
        <Progress />
      </div>
    </div>
  );
};
