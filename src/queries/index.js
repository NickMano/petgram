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

const getCategories = gql`
  query getCategories {
    categories {
      id
      cover
      name
      emoji
      path
    }
}`;

const toggleLikeMutation = gql`
mutation likeAnonymousPhoto($input: LikePhoto!) {
  likeAnonymousPhoto(input: $input) {
    id,
    liked,
    likes
  }
}`;

const signUpMutation = gql`
mutation signup($input:UserCredentials!) {
  signup(input: $input)
 }`;

export {
  getPhotos,
  getPhoto,
  getCategories,
  toggleLikeMutation,
  signUpMutation,
};
