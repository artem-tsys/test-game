import React, { useEffect } from 'react';
import { fetchConfig } from "src/redux/common/common.thinks";
import style from 'src/styles/main.module.scss';
import { useAppDispatch } from '../hooks/redux';
import { ErrorBoundary } from "../components/generic/error-boundary/errorBoundary";
import RoutesPages from "../routes/routesPages";

function App() {
	const dispatch = useAppDispatch()
	
	useEffect(() => {
		dispatch(fetchConfig())
	}, [])
	
  return (
	  <ErrorBoundary>
		  <div className={style.container}>
			  <RoutesPages />
		  </div>
	  </ErrorBoundary>
  );
}

export default App;
