import React from 'react';
import './category.scss';
import PropTypes from 'prop-types';

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';

const Category = (props) => {
  const {
    id,
    cover,
    emoji,
    loading,
    handleChange,
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
    <button type="button" className="category" onClick={() => handleChange(id)}>
      <img className="category__image" src={cover} alt={emoji} />
      {emoji}
    </button>
  );
};

Category.propTypes = {
  cover: PropTypes.string,
  emoji: PropTypes.string,
  loading: PropTypes.bool,
  id: PropTypes.string,
  handleChange: PropTypes.func,
};

Category.defaultProps = {
  cover: DEFAULT_IMAGE,
  emoji: '😃',
  loading: false,
  id: null,
  handleChange: () => {},
};

export default Category;
