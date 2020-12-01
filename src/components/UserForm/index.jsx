import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Loading from '../Loading';
import InputWithValidation from '../MailInput';

const UserForm = ({ onSubmit }) => {
  const [isPlay, setIsPlay] = useState(false);

  const [MailComponent, isValidEmail] = InputWithValidation('Email', '', (input) => new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(input));
  const [PasswordComponent, isValidEPassword] = InputWithValidation('Password', 'password', (input) => input.trim().length >= 8);

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!isValidEmail()) { isValid = false; }
    if (!isValidEPassword()) { isValid = false; }

    if (isValid) {
      setIsPlay(true);
      setTimeout(() => {
        onSubmit();
      }, 1000);
    }
  };

  return (
    <div className="user-form">
      <Loading isPlay={isPlay} />
      <p>Log in to see photos and videos from pets.</p>
      <form onSubmit={handleSubmit} className="user-form--form">
        {MailComponent}
        {PasswordComponent}
        <button type="submit" className="user-form--button">Log in</button>
      </form>
    </div>
  );
};

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default UserForm;
