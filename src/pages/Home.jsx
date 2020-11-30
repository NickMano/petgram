import React, { useState } from 'react';
import ListOfCategories from '../components/ListOfCategories';
import ListOfPhotoCards from '../components/ListOfPhotoCards';
import NavBar from '../components/NavBar';

const Home = () => {
  const [category, setCategory] = useState(null);

  const handleCategoryChange = (newCategory) => {
    setCategory(category !== newCategory ? newCategory : null);
  };

  return (
    <div style={{ paddingBottom: '50px' }}>
      <NavBar />
      <ListOfCategories handleChange={handleCategoryChange} />
      <ListOfPhotoCards categoryId={category} />
    </div>
  );
};

export default Home;
