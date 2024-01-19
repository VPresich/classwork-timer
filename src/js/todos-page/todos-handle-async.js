import fetchData from '../common/fetch-data-async.js';
import { URL_PLACEHOLDER } from '../common/constants.js';
import createMarkup from './create-markup.js';

import { createErrMsg, createOkMsg } from '../common/create-msg.js';

const listRef = document.querySelector('.todos-list');

async function fetchDataAndHandle() {
  try {
    const data = await fetchData(URL_PLACEHOLDER);
    onSuccess(data);
  } catch (error) {
    onError(error);
  }
}

function onSuccess(data) {
  listRef.innerHTML = createMarkup(data);
  createOkMsg("It's ok!");
}

function onError(error) {
  console.error(error.message);
  createErrMsg(error.message);
}

fetchDataAndHandle();
