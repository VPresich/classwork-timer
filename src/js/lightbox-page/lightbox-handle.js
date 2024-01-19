const lightboxWnd = document.createElement('div');
lightboxWnd.id = 'lightboxWnd';
document.body.appendChild(lightboxWnd);

const imagesRef = document.querySelectorAll('img');
console.log(imagesRef);
imagesRef.forEach(image => {
  image.addEventListener('click', event => {
    lightboxWnd.classList.add('active');
    const imgRef = document.createElement('img');
    imgRef.src = image.src;
    while (lightboxWnd.firstChild) {
      lightboxWnd.removeChild(lightboxWnd.firstChild);
    }
    lightboxWnd.appendChild(imgRef);
  });
});

lightboxWnd.addEventListener('click', event => {
  if (event.target !== event.currentTarget) return;
  lightboxWnd.classList.remove('active');
});
