import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const FavButton = ({ liked, likes, onClick }) => {
  const IconHeart = liked ? AiFillHeart : AiOutlineHeart;

  return (
    <button type="button" className="photoCard__button fade-in" onClick={onClick}>
      <IconHeart size="24px" />
      {likes}
      {' '}
      likes!
    </button>
  );
};

FavButton.propTypes = {
  likes: PropTypes.number,
  liked: PropTypes.bool,
  onClick: PropTypes.func,
};

FavButton.defaultProps = {
  likes: 0,
  liked: false,
  onClick: () => {},
};

export default FavButton;
