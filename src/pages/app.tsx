import React, {useEffect} from 'react';
import {ModalManager} from '../components/shared/popups/popup-factory';
import style from '../styles/main.module.scss';
import {useAppDispatch} from '../hooks/redux';
import {ErrorBoundary} from '../components/generic/error-boundary/errorBoundary';
import {fetchConfig} from '../redux/common/common.thinks';
import RoutesPages from '../routes/routesPages';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchConfig());
  }, []);

  return (
    <ErrorBoundary>
      <div className={style.container}>
        <RoutesPages />
        <ModalManager />
      </div>
    </ErrorBoundary>
  );
}

export default App;
