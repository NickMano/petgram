import { gql } from 'apollo-boost';

const getPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
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

const getFavs = gql`
  query getFavs {
    favs{
      id
      categoryId
      src
      likes
      liked
    }
  }
`;

const toggleLikeMutation = gql`
mutation likePhoto($input: LikePhoto!) {
  likePhoto(input: $input) {
    id
    liked
    likes
  }
}`;

const signUpMutation = gql`
mutation signup($input:UserCredentials!) {
  signup(input: $input)
 }`;

const loginMutation = gql`
mutation login($input:UserCredentials!) {
  login(input: $input)
 }`;

export {
  getPhotos,
  getPhoto,
  getCategories,
  getFavs,
  toggleLikeMutation,
  signUpMutation,
  loginMutation,
};
