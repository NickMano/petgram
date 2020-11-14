import React from 'react';
import PropTypes from 'prop-types';
import './photoCard.scss';
import { AiOutlineHeart } from 'react-icons/ai';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

const PhotoCard = ({ src, likes }) => (
  <article>
    <div className="photoCard__image-container">
      <img src={src} alt="photoCard" className="photoCard__image" />
    </div>
    <button type="button" className="photoCard__button">
      <AiOutlineHeart size="24px" />
      {likes}
      {' '}
      likes!
    </button>
  </article>
);

PhotoCard.propTypes = {
  src: PropTypes.string,
  likes: PropTypes.number,
};

PhotoCard.defaultProps = {
  src: DEFAULT_IMAGE,
  likes: 0,
};

export default PhotoCard;
