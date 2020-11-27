import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import PhotoCard from '../PhotoCard';
import Loading from '../Loading';
import { getPhotos } from '../../queries';

const ListOfPhotoCards = ({ categoryId }) => {
  const { data, loading, error } = useQuery(getPhotos, {
    variables: { categoryId },
  });

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

ListOfPhotoCards.propTypes = {
  categoryId: PropTypes.string,
};

ListOfPhotoCards.defaultProps = {
  categoryId: null,
};

export default ListOfPhotoCards;
