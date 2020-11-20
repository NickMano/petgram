import React from 'react';
import PropTypes from 'prop-types';
import './photoCard.scss';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import useLocalStorage from '../../hooks/useLocalStorage';
import useNearScreen from '../../hooks/useNearScreen';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

const PhotoCard = ({ src, likes, id }) => {
  const [show, ref] = useNearScreen();

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
        <button type="button" className="photoCard__button fade-in" onClick={() => setLiked(!liked)}>
          <IconHeart size="24px" />
          {liked ? likes + 1 : likes}
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
  id: PropTypes.string.isRequired,
};

PhotoCard.defaultProps = {
  src: DEFAULT_IMAGE,
  likes: 0,
};

export default PhotoCard;
