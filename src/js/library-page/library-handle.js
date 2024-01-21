import objectGetRequest from '../api/object-get-request';
import objectCreateRequest from '../api/object-create-request';
import objectUpdateRequest from '../api/object-update-request';
import objectDeleteRequest from '../api/object-delete-request';
import { createOkMsg, createErrMsg } from '../common/create-msg';
import booksGalleryCreate from './library-gallery-create';
import LibraryInterface from './library-interface';
import { BASE_URL } from '../api/constants';

const libInterface = new LibraryInterface({
  addBtnSelector: '.create',
  updateBtnClass: 'save',
  deleteBtnClass: 'delete',
  bookSelector: `.book`,
  libContainerSelector: '.books-list',
  renderingFn: booksGalleryCreate,
  dbURL: BASE_URL,
});

// let allBooks = [];

// objectGetRequest('book')
//   .then(books => {
//     onSuccess(books);
//   })
//   .catch(error => {
//     onError(error);
//   });

// const libraryRef = document.querySelector('.books-list');
// libraryRef.addEventListener('click', onLibraryClick);

// function onSuccess(books) {
//   console.log(books);
//   allBooks = books;
//   booksGalleryCreate(books, libraryRef);
//   createOkMsg("It's ok!");
// }

// function onError(error) {
//   console.error(error.message);
//   createErrMsg(error.message);
// }

// function onLibraryClick(event) {
//   const element = event.target;
//   onCloseBtnClick(element);
//   onSaveBtnClick(element);
// }

// function onCloseBtnClick(element) {
//   if (!element.classList.contains('delete')) return;
//   objectDeleteRequest('book', element.dataset.id)
//     .then(({ id }) => {
//       if (id) {
//         allBooks = allBooks.filter(book => book.id !== id);
//         document.querySelector(`.book[data-id="${id}"]`).remove();
//       }
//     })
//     .catch(error => {
//       onError(error);
//     });
// }

// function onSaveBtnClick(element) {
//   if (!element.classList.contains('save')) return;
//   const bookId = element.dataset.id;
//   const book = allBooks.find(book => book.id === bookId);
//   const inputRef = document
//     .querySelector(`.book[data-id="${bookId}"]`)
//     .querySelector('input');

//   const updateBook = {
//     ...book,
//     pointer: inputRef.value,
//   };

//   allBooks = allBooks.map(book => (book.id === bookId ? updateBook : book));

//   objectUpdateRequest('book', updateBook)
//     .then(({ id }) => {
//       if (id) {
//         createOkMsg("It's ok!");
//       }
//     })
//     .catch(error => {
//       onError(error);
//     });
// }

//////////////////////////////////////
// objectCreateRequest('book', {
//   title: 'My Book',
//   price: 84,
//   author: 'My Author',
//   pointer: 12,
//   img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1060.jpg',
//   titleimage: 'https://loremflickr.com/640/480',
// })
//   .then(book => console.log(book))
//   .catch(error => console.log(error.message));

// objectGetRequest('book')
//   .then(books => console.log(books))
//   .catch(error => console.log(error));
