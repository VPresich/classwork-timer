function getImgUrl(path, fileName) {
  const pathAndName = path + fileName;
  console.log(pathAndName);
  const imgUrl = new URL(pathAndName, import.meta.url).href;
  console.log(imgUrl);
  return imgUrl;
}

export default getImgUrl;
