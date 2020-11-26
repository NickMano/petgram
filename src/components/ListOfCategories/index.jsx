import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import Category from '../Category';
import './listOfCategories.scss';
import { getCategories } from '../../queries';

const ListOfCategories = ({ handleChange }) => {
  const { data, loading, error } = useQuery(getCategories);

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
      {data.categories.map((category) => (
        <li className="listOfCategories__item" key={category.id}>
          <Category
            cover={category.cover}
            emoji={category.emoji}
            path={category.path}
            id={category.id}
            handleChange={handleChange}
          />
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

  if (error) {
    return (
      <p>Error</p>
    );
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};

ListOfCategories.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default ListOfCategories;
