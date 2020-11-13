import React from 'react';
import Category from '../Category';
import './listOfCategories.css';

const ListOfCategories = () => (
  <ul className="listOfCategories">
    {[1, 2, 3, 4, 5, 6, 7, 8].map((category) => (
      <li className="listOfCategories__item">
        <Category />
      </li>
    ))}
  </ul>
);

export default ListOfCategories;
