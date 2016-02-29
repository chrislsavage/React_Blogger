import axios from 'axios';

export const FETCH-POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=savageasavageapost';

export function fetchPosts() {
  return {
    const request = axios.get(`${ROOT_URL/posts${API_KEY}}`)
  };

  return {
    type: FETCH_POSTS,
    payload: requests
  };
}
