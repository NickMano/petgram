import React, { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import UserForm from '../components/UserForm';
import LoginContext from '../context/LoginContext';
import { signUpMutation } from '../queries';

const UserNotRegistered = () => {
  const { setIsAuth } = useContext(LoginContext);
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

  const errorMsg = error && 'Upss, a error was ocurred, try again.';

  return (
    <>
      <UserForm onSubmit={handleSubmit} loading={loading} buttonTitle="Sign Up" />
      <p>{errorMsg}</p>
    </>
  );
};

export default UserNotRegistered;
