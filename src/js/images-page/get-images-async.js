import fetchData from '../common/fetch-data-async.js';
import { API_KEY, API_URL, ERR_NO_IMAGES } from '../common/constants.js';

async function getImages(strForSearch) {
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

  const data = await fetchData(url);
  if (!data.hits.length) {
    throw new Error(ERR_NO_IMAGES);
  }
  return data.hits;
}
export default getImages;
