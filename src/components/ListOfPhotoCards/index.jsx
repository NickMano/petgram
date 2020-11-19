import React from 'react';
import PhotoCard from '../PhotoCard';
import { photos } from '../../../api/db.json';

const ListOfPhotoCards = () => (
  <ul>
    {photos.map((photoCard) => (
      <PhotoCard
        key={photoCard.id}
        src={photoCard.src}
        likes={photoCard.likes}
        id={photoCard.id}
      />
    ))}
  </ul>
);

export default ListOfPhotoCards;
