import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import './favButton.scss';

const FavButton = ({ liked, likes, onClick }) => {
  const IconHeart = liked ? AiFillHeart : AiOutlineHeart;

  return (
    <button type="button" className="fav-button fade-in" onClick={onClick}>
      <IconHeart className="fav-button--icon" size="28px" />
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
