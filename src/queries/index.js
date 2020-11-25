import { gql } from 'apollo-boost';

const getPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
}`;

const getPhoto = gql`
  query getPhoto($photoId: ID!) {
    photo(id: $photoId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
}`;

const toggleLikeMutation = gql`
mutation likeAnonymousPhoto($input: LikePhoto!) {
  likeAnonymousPhoto(input: $input) {
    id,
    liked,
    likes
  }
}
`;

export { getPhotos, getPhoto, toggleLikeMutation };
