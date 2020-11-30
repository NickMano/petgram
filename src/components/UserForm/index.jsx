import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useInputForm from '../../hooks/useInputForm';
import './style.scss';
import Loading from '../Loading';

const isValidMail = (mail) => new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(mail);

const UserForm = ({ onSubmit }) => {
  const password = useInputForm('');
  const mail = useInputForm('');
  const cssClassName = 'user-form';
  const [mailClassName, setMailClassName] = useState(`${cssClassName}--input`);
  const [isPlay, setIsPlay] = useState(false);

  const handleSubmit = (e) => {
    setMailClassName(`${cssClassName}--input`);
    let isValidUser = true;

    if (mail.value.trim().length === 0 || !isValidMail(mail.value)) {
      isValidUser = false;
      setMailClassName(`${cssClassName}--input error`);
    }

    e.preventDefault();

    if (!isValidUser) {
      console.log('error');
    } else {
      setIsPlay(true);
      setTimeout(() => {
        onSubmit();
      }, 1000);
    }
  };

  return (
    <div className={cssClassName}>
      <Loading isPlay={isPlay} />
      <form onSubmit={handleSubmit} className={`${cssClassName}--form`}>
        <input placeholder="Mail" value={mail.value} onChange={mail.onChange} className={mailClassName} />
        <input placeholder="Password" type="password" value={password.value} onChange={password.onChange} className="user-form--input" />
        <button type="submit" className="user-form--button">Login</button>
      </form>
    </div>
  );
};

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default UserForm;
