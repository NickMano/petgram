import React, { useContext, Suspense } from 'react';
import { Router } from '@reach/router';
import LoginContext from './context/LoginContext';

const UserNotRegistered = React.lazy(() => import('./pages/UserNotRegistered'));
const Favs = React.lazy(() => import('./pages/Favs'));
const User = React.lazy(() => import('./pages/User'));

const PrivateRoute = () => {
  const { isAuth } = useContext(LoginContext);

  return (
    <Suspense fallback={<div />}>
      <Router>
        {isAuth
          ? (
            <>
              <Favs path="/favs" />
              <User path="/user" />
            </>
          )
          : (
            <>
              <UserNotRegistered path="/favs" />
              <UserNotRegistered path="/user" />
            </>
          )}
      </Router>
    </Suspense>
  );
};

export default PrivateRoute;
