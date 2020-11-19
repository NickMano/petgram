import React, { useEffect, useState } from 'react';
import Category from '../Category';
import './listOfCategories.scss';
import useFetchData from '../../hooks/useFetchData';

const ListOfCategories = () => {
  const [categories, loading] = useFetchData('https://petgram-server-nem.nickmano.vercel.app/categories');

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

  if (loading) {
    return (
      <ul className="listOfCategories">
        {[1, 2, 3, 4, 5].map((category) => (
          <li className="listOfCategories__item" key={category}>
            <Category loading />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};

export default ListOfCategories;
