import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ROUTE } from '@constant/index';
import IProtectedRoute from './type';

const ProtectedRoute = ({
  path,
  component,
  exact,
  isLogged,
}: IProtectedRoute) => {
  if (!isLogged) {
    return <Redirect to={ROUTE.Home} />;
  }
  return <Route exact={exact} path={path} component={component} />;
};

export default ProtectedRoute;
