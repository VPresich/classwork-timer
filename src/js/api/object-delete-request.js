import dbRequest from './db-request.js';

const objectDeleteRequest = (endPoint, id) =>
  dbRequest(`${endPoint}/${id}`, {
    method: 'DELETE',
  });

export default objectDeleteRequest;
