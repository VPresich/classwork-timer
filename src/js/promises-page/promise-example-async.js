import fetchData from '../common/fetch-data-async.js';
import { URL_PLACEHOLDER } from '../common/constants.js';
import getImages from '../images-page/get-images-async.js';
import { createErrMsg, createOkMsg } from '../common/create-msg';

// example 1
try {
  const data = await fetchData(URL_PLACEHOLDER);
  console.log(data);
  createOkMsg("It's ok!");
} catch (error) {
  onsole.log(error.message);
  createErrMsg(err.message);
}

// example 2
try {
  const images = await getImages('qqqq');
  console.log(images);
  createOkMsg("It's ok!");
} catch (error) {
  console.log(error.message);
  createErrMsg(error.message);
}
