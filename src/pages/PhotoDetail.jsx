import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from '@reach/router';
import PropTypes from 'prop-types';
import { getPhoto } from '../queries';
import PhotoCard from '../components/PhotoCard';
import NavBar from '../components/NavBar';

const PhotoDetail = (props) => {
  let { photoCard } = props;
  const params = useParams();
  const { data, loading, error } = useQuery(getPhoto, { variables: { photoId: params.photoId } });

  if (!photoCard && data) {
    photoCard = data.photo;
  }

  if (error) {
    return (
      <>
        <NavBar />
        <p>Error</p>
      </>
    );
  }

  if (!photoCard && loading) {
    return (
      <>
        <NavBar />
        <PhotoCard loading />
      </>
    );
  }

  return (
    <>
      <NavBar />
      <PhotoCard
        src={photoCard.src}
        likes={photoCard.likes}
        id={photoCard.id}
      />
    </>
  );
};

PhotoDetail.propTypes = {
  photoCard: PropTypes.shape({
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

PhotoDetail.defaultProps = {
  photoCard: null,
};

export default PhotoDetail;
