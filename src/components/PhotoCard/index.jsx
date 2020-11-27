import React from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import useNearScreen from '../../hooks/useNearScreen';
import useLocalStorage from '../../hooks/useLocalStorage';
import FavButton from '../FavButton';
import { toggleLikeMutation } from '../../queries';
import './photoCard.scss';
import PetPhoto from '../PetPhoto';

const PhotoCard = (props) => {
  const {
    src,
    likes,
    id,
    loading,
  } = props;
  const [show, ref] = useNearScreen();
  const [liked, setLiked] = useLocalStorage(`like-${id}`, false);

  const [toggleLike] = useMutation(toggleLikeMutation, { variables: { input: { id } } });

  const handleFavClick = () => {
    if (!liked) toggleLike();
    setLiked(!liked);
  };

  if (loading) {
    return (
      <article className="photoCard" ref={ref}>
        <PetPhoto src={src} id={id} />
        <FavButton likes={0} liked={false} onClick={handleFavClick} />
      </article>
    );
  }

  return (
    <article className="photoCard" ref={ref}>
      {show
      && (
      <>
        <PetPhoto src={src} id={id} />
        <FavButton likes={likes} liked={liked} onClick={handleFavClick} />
      </>
      )}
    </article>
  );
};

PhotoCard.propTypes = {
  src: PropTypes.string,
  likes: PropTypes.number,
  id: PropTypes.string,
  loading: PropTypes.bool,
};

PhotoCard.defaultProps = {
  src: null,
  likes: 0,
  id: null,
  loading: false,
};

export default PhotoCard;
