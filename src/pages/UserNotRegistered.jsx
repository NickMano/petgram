import React, { useContext } from 'react';
import LoginContext from '../context/LoginContext';

const UserNotRegistered = () => {
  const { isAuth, setIsAuth } = useContext(LoginContext);

  const handleClick = () => {
    setIsAuth(!isAuth);
  };

  return (
    <>
      <p>UserNotRegistered</p>
      <button type="button" onClick={handleClick}>login </button>
    </>
  );
};

export default UserNotRegistered;
