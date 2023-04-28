import React, {FC} from 'react';
import {Route, Routes} from 'react-router-dom';
import {GamePage} from '../pages/game';
import {GameOverPage} from '../pages/gameOver';
import Greeting from '../pages/greeting';

interface IRoutes {
  path: string;
  component: FC;
}

const routesList: IRoutes[] = [
  {
    path: '/',
    component: Greeting,
  },
  {
    path: '/game',
    component: GamePage,
  },
  {
    path: '/gameOver',
    component: GameOverPage,
  },
];

const renderRoute = ({path, component: Component}) => (
  <Route
    key={path}
    path={path}
    element={<Component />}
  />
);

export default function RoutesPages(): JSX.Element {
  return <Routes>{routesList.map(renderRoute)}</Routes>;
}
