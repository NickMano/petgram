import React, { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import UserForm from '../components/UserForm';
import LoginContext from '../context/LoginContext';
import NavBar from '../components/NavBar';
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
    <div style={{ paddingBottom: '50px' }}>
      <NavBar />
      <UserForm onSubmit={handleSubmit} buttonTitle="Sign Up" />
    </div>
  );
};

export default UserNotRegistered;
