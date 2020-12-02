import React, { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import UserForm from '../components/UserForm';
import LoginContext from '../context/LoginContext';
import { signUpMutation } from '../queries';

const UserNotRegistered = () => {
  const { isAuth, setIsAuth } = useContext(LoginContext);
  const [signUp] = useMutation(signUpMutation);

  const handleSubmit = async (email, password) => {
    const userCredentials = {
      variables: {
        input: {
          email,
          password,
        },
      },
    };

    try {
      await signUp(userCredentials);
      setIsAuth(!isAuth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <UserForm onSubmit={handleSubmit} loading={loading} buttonTitle="Sign Up" />
      <p>{errorMsg}</p>
    </>
  );
};

export default UserNotRegistered;
