import {POPUPS} from '../../../constants/popups.constans';
import {useAppDispatch} from '../../../hooks/redux';
import {useMobile} from '../../../hooks/useMobile';
import {SHOW_MODAL} from '../../../redux/modal/modal.slice';
import {Burger} from '../../shared/buttons/burger/burger';
import {Header} from '../../shared/header/header';
import {Progress} from '../../shared/progress/progress';
import {Round} from './round';
import style from './game.module.scss';

export const Game = (): JSX.Element => {
  const isMobile = useMobile();
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(
      SHOW_MODAL({
        name: POPUPS.MENU,
      })
    );
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        {isMobile && (
          <Header>
            <Burger handler={onClick} />
          </Header>
        )}
      </div>

      <Round />
      {!isMobile ? (
        <div className={style.progress}>
          <Progress />
        </div>
      ) : null}
    </div>
  );
};
