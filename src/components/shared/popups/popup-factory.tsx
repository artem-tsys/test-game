import {FC} from 'react';
import {PopupName} from '../../../constants/popups.constans';
import {useAppSelector} from '../../../hooks/redux';
import {modalNameSelector} from '../../../redux/modal/modal.selectors';
import {Menu} from './menu/menu';
import style from './popups.module.scss';

const popupsConfig: Record<PopupName, FC> = {
  MENU: Menu,
};

export const ModalManager = (): JSX.Element => {
  const modalName = useAppSelector(modalNameSelector);
  const ModalToShow = popupsConfig[modalName];

  if (!ModalToShow) return null;
  return (
    <div className={style.container}>
      <ModalToShow />
    </div>
  );
};
