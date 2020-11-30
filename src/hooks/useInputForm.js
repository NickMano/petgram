import PropTypes from 'prop-types';

const { useState } = require('react');

const useInputForm = (initialState) => {
  const [value, setValue] = useState(initialState);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return { value, onChange };
};

useInputForm.propTypes = {
  initialState: PropTypes.string,
};

useInputForm.defaultProps = {
  initialState: '',
};

export default useInputForm;
