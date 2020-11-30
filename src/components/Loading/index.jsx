import React from 'react';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';
import * as animationData from './cat-lottie.json';

const Loading = ({ isPlay }) => {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      width={240}
      height="auto"
      isStopped={!isPlay}
    />
  );
};

Loading.propTypes = {
  isPlay: PropTypes.bool,
};

Loading.defaultProps = {
  isPlay: false,
};

export default Loading;
