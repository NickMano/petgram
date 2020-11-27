import React from 'react';
import PropTypes from 'prop-types';
import { Link, useMatch } from '@reach/router';
import './petPhoto.scss';

const PetPhoto = ({ src, id }) => {
  const matchToHome = useMatch('/');

  if (!src) {
    return (
      <div className="photoCard__image-container loading" />
    );
  }

  if (matchToHome) {
    return (
      <Link className="photoCard__image-container fade-in" to={`/photo/${id}`}>
        <img src={src} alt="photoCard" className="photoCard__image" />
      </Link>
    );
  }
  return (
    <div className="photoCard__image-container fade-in">
      <img src={src} alt="photoCard" className="photoCard__image" />
    </div>
  );
};

PetPhoto.propTypes = {
  src: PropTypes.string,
  id: PropTypes.string,
};

PetPhoto.defaultProps = {
  src: null,
  id: null,
};

export default PetPhoto;
