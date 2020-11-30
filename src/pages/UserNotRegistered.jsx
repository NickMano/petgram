import React, { useContext } from 'react';
import UserForm from '../components/UserForm';
import LoginContext from '../context/LoginContext';
import NavBar from '../components/NavBar';

const UserNotRegistered = () => {
  const { isAuth, setIsAuth } = useContext(LoginContext);

  const handleSubmit = () => {
    setIsAuth(!isAuth);
  };

  return (
    <div style={{ paddingBottom: '50px' }}>
      <NavBar />
      <UserForm onSubmit={handleSubmit} />
    </div>
  );
};

export default UserNotRegistered;
