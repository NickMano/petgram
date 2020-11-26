import React, { useState } from 'react';
import ListOfCategories from '../components/ListOfCategories';
import ListOfPhotoCards from '../components/ListOfPhotoCards';
import Logo from '../components/Logo';

const Home = () => {
  const [category, setCategory] = useState(null);

  const handleCategoryChange = (newCategory) => {
    setCategory(category !== newCategory ? newCategory : null);
  };

  return (
    <>
      <Logo />
      <ListOfCategories handleChange={handleCategoryChange} />
      <ListOfPhotoCards categoryId={category} />
    </>
  );
};

export default Home;
