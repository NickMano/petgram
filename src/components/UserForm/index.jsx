import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Loading from '../Loading';
import InputWithValidation from '../InputWithValidation';

const UserForm = ({ onSubmit, buttonTitle }) => {
  const [isPlay, setIsPlay] = useState(false);

  const [MailComponent, mailValue, isValidEmail] = InputWithValidation(
    'Email',
    '',
    (input) => new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(input),
  );
  const [PasswordComponent, passwordValue, isValidEPassword] = InputWithValidation(
    'Password',
    'password',
    (input) => input.trim().length >= 8,
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!isValidEmail()) { isValid = false; }
    if (!isValidEPassword()) { isValid = false; }

    if (isValid) {
      setIsPlay(true);
      onSubmit(mailValue, passwordValue);
    }
  };

  return (
    <div className="user-form">
      <Loading isPlay={isPlay} />
      <p>Log in to see photos and videos from pets.</p>
      <form onSubmit={handleSubmit} className="user-form--form">
        {MailComponent}
        {PasswordComponent}
        <button type="submit" className="user-form--button">{buttonTitle}</button>
      </form>
    </div>
  );
};

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  buttonTitle: PropTypes.string.isRequired,
};

export default UserForm;
