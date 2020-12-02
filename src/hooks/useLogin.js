import { useMutation } from '@apollo/react-hooks';
import PropTypes from 'prop-types';

const useLogin = (mutation) => {
  const [action, { data, loading, error }] = useMutation(mutation);

  const onSubmit = (email, password) => {
    const userCredentials = {
      variables: {
        input: {
          email,
          password,
        },
      },
    };

    action(userCredentials);
  };

  return {
    onSubmit, data, loading, error,
  };
};

useLogin.propTypes = {
  mutation: PropTypes.func.isRequired,
};

export default useLogin;
