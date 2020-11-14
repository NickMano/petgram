import React from 'react';
import Category from '../Category';
import './listOfCategories.scss';
import { categories } from '../../../api/db.json';

const ListOfCategories = () => (
  <ul className="listOfCategories">
    {categories.map((category) => (
      <li className="listOfCategories__item" key={category.id}>
        <Category cover={category.cover} emoji={category.emoji} path={category.path} />
      </li>
    ))}
  </ul>
);

export default ListOfCategories;
