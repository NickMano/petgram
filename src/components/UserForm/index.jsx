import React from 'react';
import PropTypes from 'prop-types';
import useInputForm from '../../hooks/useInputForm';

const UserForm = ({ onSubmit }) => {
  const password = useInputForm();
  const email = useInputForm();

  return (
    <form onSubmit={onSubmit}>
      <input placeholder="Email" value={email.value} onChange={email.onChange} />
      <input placeholder="Password" ype="password" value={password.value} onChange={password.onChange} />
      <button type="submit">Login</button>
    </form>
  );
};

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default UserForm;
