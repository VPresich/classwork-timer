import fetchData from '../common/fetch-data';
import { URL_PLACEHOLDER } from '../common/constants';
import getImages from './get-images';
import { createErrMsg, createOkMsg } from '../common/create-msg';

// example 1
fetchData(URL_PLACEHOLDER)
  .then(data => {
    console.log(data);
    createOkMsg("It's ok!");
  })
  .catch(error => {
    console.log(error.message);
    createErrMsg(err.message);
  });

// example 2
getImages('cats')
  .then(images => {
    console.log(images);
    createOkMsg("It's ok!");
  })
  .catch(err => {
    console.log(err);
    createErrMsg(err);
  });
