import React from 'react';
import './category.scss';
import PropTypes from 'prop-types';

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';

const Category = (props) => {
  const {
    cover,
    emoji,
    path,
    loading,
  } = props;

  if (loading) {
    return (
      <div className="category">
        <div className="category__image loading" />
        {emoji}
      </div>
    );
  }

  return (
    <a className="category" href={path}>
      <img className="category__image" src={cover} alt={emoji} />
      {emoji}
    </a>
  );
};

Category.propTypes = {
  cover: PropTypes.string,
  emoji: PropTypes.string,
  path: PropTypes.string,
  loading: PropTypes.bool,
};

Category.defaultProps = {
  cover: DEFAULT_IMAGE,
  emoji: '😃',
  path: '',
  loading: false,
};

export default Category;
