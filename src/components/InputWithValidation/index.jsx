import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useInputForm from '../../hooks/useInputForm';
import './style.scss';

const InputWithValidation = (placeholder, type, isValidInput) => {
  const input = useInputForm('');
  const cssClassNameInitial = 'input';
  const cssClassNameError = 'input error';

  const [inputClassName, setInputClassName] = useState(cssClassNameInitial);

  const handleSubmit = () => {
    setInputClassName(cssClassNameInitial);
    let isValid = true;

    if (input.value.trim().length === 0 || !isValidInput(input.value)) {
      isValid = false;
      setInputClassName(cssClassNameError);
    }

    return isValid;
  };

  return (
    [
      <input
        placeholder={placeholder}
        value={input.value}
        type={type}
        onChange={input.onChange}
        className={inputClassName}
      />,
      input.value,
      handleSubmit,
    ]
  );
};

InputWithValidation.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  isValidInput: PropTypes.func,
};

InputWithValidation.defaultProps = {
  placeholder: '',
  type: '',
  isValidInput: () => true,
};

export default InputWithValidation;
