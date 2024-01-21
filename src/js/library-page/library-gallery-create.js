import bookCardsMarkup from './book-cards-markup';

const booksGalleryCreate = (books, booksGalleryContainer) => {
  const strMarkup = bookCardsMarkup(books, booksGalleryContainer);
  booksGalleryContainer.innerHTML = '';
  booksGalleryContainer.insertAdjacentHTML('beforeend', strMarkup);
};

export default booksGalleryCreate;
