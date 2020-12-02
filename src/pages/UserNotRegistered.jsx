import React, { useContext, useState } from 'react';
import useLogin from '../hooks/useLogin';
import UserForm from '../components/UserForm';
import LoginContext from '../context/LoginContext';
import { signUpMutation, loginMutation } from '../queries';
import '../styles/base.scss';

const UserNotRegistered = () => {
  const { setIsAuth } = useContext(LoginContext);
  const [isLogin, setIsLogin] = useState(false);
  const mutation = isLogin ? loginMutation : signUpMutation;
  const {
    onSubmit, data, loading, error,
  } = useLogin(mutation);

  const handleSubmit = (email, password) => {
    onSubmit(email, password);
  };

  if (data) { setIsAuth(data); }

  const errorMsg = error && error.message;
  const LoginMsg = isLogin ? 'Log In' : 'Sign In';

  const LoginTextComponent = (
    <p style={{ textAlign: 'center' }}>
      {isLogin ? 'Don\'t have an account?' : 'Have an account?' }
      {' '}
      <button className="button-link" type="button" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Sign In' : 'Log In' }
      </button>
    </p>
  );

  return (
    <>
      <UserForm onSubmit={handleSubmit} loading={loading} buttonTitle={LoginMsg} />
      <p style={{ color: 'red', textAlign: 'center' }}>{errorMsg}</p>
      {LoginTextComponent}
    </>
  );
};

export default UserNotRegistered;
