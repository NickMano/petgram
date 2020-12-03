import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import PhotoCard from '../PhotoCard';
import { getPhotos } from '../../queries';

const ListOfPhotoCards = ({ categoryId }) => {
  const { data, loading, error } = useQuery(getPhotos, {
    variables: { categoryId },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) {
    return (
      <ul>
        {[1, 2, 3, 4].map((photoCard) => <PhotoCard key={photoCard} loading />)}
      </ul>
    );
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
          liked={photoCard.liked}
          id={photoCard.id}
        />
      ))}
    </ul>
  );
};

ListOfPhotoCards.propTypes = {
  categoryId: PropTypes.string,
};

ListOfPhotoCards.defaultProps = {
  categoryId: null,
};

export default ListOfPhotoCards;
