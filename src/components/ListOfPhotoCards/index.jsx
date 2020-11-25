import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import PhotoCard from '../PhotoCard';
import Loading from '../Loading';
import { getPhotos } from '../../queries';

const ListOfPhotoCards = () => {
  const { data, loading, error } = useQuery(getPhotos);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <ul>
      {data?.photos.map((photoCard) => (
        <PhotoCard
          key={photoCard.id}
          src={photoCard.src}
          likes={photoCard.likes}
          id={photoCard.id}
        />
      ))}
    </ul>
  );
};

export default ListOfPhotoCards;
