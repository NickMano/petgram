import React, { useContext, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import UserForm from '../components/UserForm';
import LoginContext from '../context/LoginContext';
import { signUpMutation } from '../queries';

const UserNotRegistered = () => {
  const { setIsAuth } = useContext(LoginContext);
  const [isLogin, setIsLogin] = useState(false);
  const [signUp, { data, loading, error }] = useMutation(signUpMutation);

  const handleSubmit = async (email, password) => {
    const userCredentials = {
      variables: {
        input: {
          email,
          password,
        },
      },
    };
    await signUp(userCredentials);
  };

  if (data) { setIsAuth(data.signup); }

  const errorMsg = error && 'Ups, a error was ocurred, try again.';
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
