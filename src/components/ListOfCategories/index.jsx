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

  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 200;
      if (newShowFixed !== showFixed) { setShowFixed(newShowFixed); }
    };
    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [showFixed]);

  const renderList = (fixed) => (
    <ul className={`listOfCategories ${fixed ? 'fixed' : ''}`}>
      {categories.map((category) => (
        <li className="listOfCategories__item" key={category.id}>
          <Category cover={category.cover} emoji={category.emoji} path={category.path} />
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};

export default ListOfCategories;
