import React, { useContext } from 'react';
import UserForm from '../components/UserForm';
import LoginContext from '../context/LoginContext';

const UserNotRegistered = () => {
  const { isAuth, setIsAuth } = useContext(LoginContext);

  const handleSubmit = () => {
    setIsAuth(!isAuth);
  };

  return (
    <>
      <p>UserNotRegistered</p>
      <UserForm onSubmit={handleSubmit} />
    </>
  );
};

export default UserNotRegistered;
