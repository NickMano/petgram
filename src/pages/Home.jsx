import React, { useState } from 'react';
import ListOfCategories from '../components/ListOfCategories';
import ListOfPhotoCards from '../components/ListOfPhotoCards';

const Home = () => {
  const [category, setCategory] = useState(null);

  const handleCategoryChange = (newCategory) => {
    setCategory(category !== newCategory ? newCategory : null);
  };

  return (
    <>
      <ListOfCategories handleChange={handleCategoryChange} />
      <ListOfPhotoCards categoryId={category} />
    </>
  );
};

export default Home;
