import dbRequest from './db-request.js';

const objectCreateRequest = (endPoint, obj) =>
  dbRequest(endPoint, {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: { 'Content-Type': 'application/json' },
  });

export default objectCreateRequest;
