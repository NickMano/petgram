import React from 'react';
import './category.css';

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';

const Category = ({ cover = DEFAULT_IMAGE, emoji = '?', path = '' }) => (
  <a className="category" href={path}>
    <img className="category__image" src={cover} alt={emoji} />
    {emoji}
  </a>
);

export default Category;
