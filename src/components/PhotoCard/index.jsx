import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './photoCard.scss';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import useLocalStorage from '../../hooks/useLocalStorage';
import useNearScreen from '../../hooks/useNearScreen';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

const PhotoCard = ({ src, likes, id }) => {
  const ref = useRef(null);
  const show = useNearScreen(ref);

  const [liked, setLiked] = useLocalStorage(`like-${id}`, false);
  const IconHeart = liked ? AiFillHeart : AiOutlineHeart;

  return (
    <article className="photoCard" ref={ref}>
      {show
      && (
      <>
        <div className="photoCard__image-container fade-in">
          <img src={src} alt="photoCard" className="photoCard__image" />
        </div>
        <button type="button" className="photoCard__button" onClick={() => setLiked(!liked)}>
          <IconHeart size="24px" />
          {likes}
          {' '}
          likes!
        </button>
      </>
      )}
    </article>
  );
};

PhotoCard.propTypes = {
  src: PropTypes.string,
  likes: PropTypes.number,
  id: PropTypes.number.isRequired,
};

PhotoCard.defaultProps = {
  src: DEFAULT_IMAGE,
  likes: 0,
};

export default PhotoCard;
