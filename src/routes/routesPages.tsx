import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Greeting from "src/pages/greeting";

interface IRoutes {
  path: string
  component: FC
}

const routesList: IRoutes[] = [
  {
    path: '/',
    component: Greeting,
  },
  {
    path: '/final',
    component: Greeting,
  },
];

const renderRoute = ({ path, component: Component }) => (
  <Route key={path} path={path} element={<Component />} />
)

export default function RoutesPages(): JSX.Element {
  return <Routes>{routesList.map(renderRoute)}</Routes>
}
