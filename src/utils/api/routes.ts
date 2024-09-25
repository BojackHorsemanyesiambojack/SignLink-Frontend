const baseUrl = import.meta.env.VITE_API;
const baseUrlFASTAPI = import.meta.env.VITE_FASTAPI;

const signDecIARoute = `${baseUrlFASTAPI}sign-dec`;
const signInRoute = `${baseUrl}Auth/Sign-In`;
const signUpRoute = `${baseUrl}Auth/Sign-Up`;
const getUsersRoute = `${baseUrl}Auth/Get-User?UserName=`;
const createPostRoute = `${baseUrl}Posting/Post`;
const listUserPostsRoute = `${baseUrl}Posting/Posts?UserName=`;

export default {
  signDecIARoute,
  signUpRoute,
  createPostRoute,
  getUsersRoute,
  signInRoute,
  listUserPostsRoute,
};
