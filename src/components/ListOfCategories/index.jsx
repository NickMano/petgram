import React, { useEffect, useState } from 'react';
import Category from '../Category';
import './listOfCategories.scss';

const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    const response = await fetch('https://petgram-server-nem.nickmano.vercel.app/categories');
    const data = await response.json();
    setCategories(data);
  }, []);
  return (
    <ul className="listOfCategories">
      {categories.map((category) => (
        <li className="listOfCategories__item" key={category.id}>
          <Category cover={category.cover} emoji={category.emoji} path={category.path} />
        </li>
      ))}
    </ul>
  );
};

export default ListOfCategories;
