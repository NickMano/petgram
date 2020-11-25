import React from 'react';
import PropTypes from 'prop-types';
import './photoCard.scss';
import { useMutation } from '@apollo/react-hooks';
import useNearScreen from '../../hooks/useNearScreen';
import useLocalStorage from '../../hooks/useLocalStorage';
import FavButton from '../FavButton';
import { toggleLikeMutation } from '../../queries';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

const PhotoCard = ({ src, likes, id }) => {
  const [show, ref] = useNearScreen();
  const [liked, setLiked] = useLocalStorage(`like-${id}`, false);

  const [toggleLike] = useMutation(toggleLikeMutation, { variables: { input: { id } } });

  const handleFavClick = () => {
    if (!liked) toggleLike();
    setLiked(!liked);
  };

  return (
    <article className="photoCard" ref={ref}>
      {show
      && (
      <>
        <div className="photoCard__image-container fade-in">
          <img src={src} alt="photoCard" className="photoCard__image" />
        </div>
        <FavButton likes={likes} liked={liked} onClick={handleFavClick} />
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
