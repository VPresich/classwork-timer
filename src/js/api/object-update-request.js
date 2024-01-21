import dbRequest from './db-request.js';

const objectUpdateRequest = (endPoint, obj) =>
  dbRequest(`${endPoint}/${obj.id}`, {
    method: 'PUT',
    body: JSON.stringify(obj),
    headers: { 'Content-Type': 'application/json' },
  });

export default objectUpdateRequest;
