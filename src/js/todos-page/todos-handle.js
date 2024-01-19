import fetchData from '../common/fetch-data.js';
import { URL_PLACEHOLDER } from '../common/constants.js';
import createMarkup from './create-markup.js';

import { createErrMsg, createOkMsg } from '../common/create-msg';

const listRef = document.querySelector('.todos-list');

fetchData(URL_PLACEHOLDER)
  .then(data => {
    onSuccess(data);
  })
  .catch(error => {
    onError(error);
  });

function onSuccess(data) {
  listRef.innerHTML = createMarkup(data);
  createOkMsg("It's ok!");
}

function onError(error) {
  console.log(error.message);
  createErrMsg(error.message);
}
