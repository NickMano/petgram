import React from 'react';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';

const Loading = ({ isPlay }) => {
  <div className="lds-default__container">
    <div className="lds-default">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
  return (
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
  );

Loading.propTypes = {
  isPlay: PropTypes.bool,
};

Loading.defaultProps = {
  isPlay: false,
};

export default Loading;
