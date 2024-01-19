import getImages from './get-images-async.js';

import createCadsGallery from './create-markup.js';

import { createErrMsg, createOkMsg } from '../common/create-msg';

const listImagesRef = document.querySelector('.images-list');

async function fetchImagesAndHandle() {
  try {
    const images = await getImages('qqqqqq');
    onSuccess(images);
  } catch (error) {
    onError(error);
  }
}

function onSuccess(images) {
  createCadsGallery(images, listImagesRef);
  createOkMsg("It's ok!");
}

function onError(error) {
  console.error(error.message);
  createErrMsg(error.message);
}

fetchImagesAndHandle();
