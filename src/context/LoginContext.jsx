import React, { useState } from 'react';
import PropTypes from 'prop-types';

const LoginContext = React.createContext(false);

export function LoginContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(window.sessionStorage.getItem('token'));

  const activateAuth = (token) => {
    setIsAuth(true);
    window.sessionStorage.setItem('token', token);
  };

  const removeAuth = () => {
    window.sessionStorage.removeItem('token');
  };

  const value = {
    isAuth,
    activateAuth,
    removeAuth,
  };

  return (
    <LoginContext.Provider value={value}>
      {children}
    </LoginContext.Provider>
  );
}

LoginContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LoginContext;
