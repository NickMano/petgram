import React, { useState } from 'react';
import PropTypes from 'prop-types';

const LoginContext = React.createContext(false);

export function LoginContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <LoginContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </LoginContext.Provider>
  );
}

LoginContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LoginContext;
