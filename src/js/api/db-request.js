import { BASE_URL } from './constants.js';

const dbRequest = (endPoint, attr = {}) => {
  return fetch(BASE_URL + endPoint, attr)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log(error.message));
};

export default dbRequest;
