import fetchData from '../common/fetch-data.js';
import { API_KEY, API_URL, ERR_NO_IMAGES } from '../common/constants.js';

function getImages(strForSearch) {
  const apiParams = {
    key: API_KEY,
    q: encodeURIComponent(strForSearch),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 20,
  };

  const url = `${API_URL}?${new URLSearchParams(apiParams).toString()}`;

  return new Promise((resolve, reject) =>
    fetchData(url)
      .then(data => {
        if (!data.hits.length) {
          reject(ERR_NO_IMAGES);
        }
        resolve(data.hits);
      })
      .catch(error => reject(error.toString()))
  );
}

export default getImages;
