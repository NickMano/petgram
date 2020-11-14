import React from 'react';
import ListOfCategories from '../ListOfCategories';
import PhotoCard from '../PhotoCard';

const ListOfPhotoCards = () => (
  <ul>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((photoCard) => (<PhotoCard />))}
  </ul>
);

export default ListOfPhotoCards;
