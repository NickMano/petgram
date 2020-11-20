import { gql } from 'apollo-boost';

const getPhotos = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
}`;

export default getPhotos;
