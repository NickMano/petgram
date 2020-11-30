import React, { useContext } from 'react';
import { Router } from '@reach/router';
import Favs from './pages/Favs';
import User from './pages/User';
import UserNotRegistered from './pages/UserNotRegistered';
import LoginContext from './context/LoginContext';

const PrivateRoute = () => {
  const { isAuth } = useContext(LoginContext);

  return (
    <>
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
    </>
  );
};

export default PrivateRoute;
