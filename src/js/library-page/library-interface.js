import Library from './library.js';
import DbApi from '../api/db-api.js';
import { createOkMsg, createErrMsg } from '../common/create-msg';

class LibraryInterface {
  #libraryObj;
  #addFrm;
  #updateBtnClass;
  #deleteBtnClass;
  #bookSelector;
  #booksCounter;
  #libraryContainer;
  #renderingFn;
  #dbApi;
  constructor({
    addFrmSelector,
    updateBtnClass,
    deleteBtnClass,
    bookSelector,
    libContainerSelector,
    renderingFn,
    dbURL,
  }) {
    this.#libraryObj = new Library();
    this.#dbApi = new DbApi(dbURL);

    this.#updateBtnClass = updateBtnClass;
    this.#deleteBtnClass = deleteBtnClass;
    this.#bookSelector = bookSelector;

    this.#addFrm = document.querySelector(addFrmSelector);
    this.#libraryContainer = document.querySelector(libContainerSelector);

    this.#renderingFn = renderingFn;

    this.#init();
  }

  destroy() {
    this.#removeHandles();
  }

  #init() {
    this.#initData();
    this.#initHandles();
  }

  #initData() {
    this.#dbApi
      .objectGetRequest('book')
      .then(books => {
        this.#libraryObj.books = books;
        this.#updateLibraryContainer();
      })
      .catch(error => this.#onError(error));
  }

  #initHandles() {
    this.#libraryContainer.addEventListener(
      'click',
      this.onLibraryContainerClick.bind(this)
    );
    this.#addFrm.addEventListener('submit', this.onAddFrmSubmit.bind(this));
  }

  #removeHandles() {
    this.#libraryContainer.removeEventListener(
      'click',
      this.onLibraryContainerClick.bind(this)
    );
    this.#addFrm.removeEventListener('submit', this.onAddFrmSubmit.bind(this));
  }

  #updateLibraryContainer() {
    this.#renderingFn(this.#libraryObj.books, this.#libraryContainer);
  }

  #onError(error) {
    console.log(error?.message);
    createErrMsg(error?.message);
  }

  onLibraryContainerClick(event) {
    const element = event.target;
    this.#onDeleteBtnClick(element);
    this.#onUpdateBtnClick(element);
  }

  #onDeleteBtnClick(element) {
    if (!element.classList.contains(this.#deleteBtnClass)) return;
    this.#dbApi
      .objectDeleteRequest('book', element.dataset.id)
      .then(({ id }) => {
        if (id) {
          this.#libraryObj.removeBook(id);
          this.#updateLibraryContainer();
          createOkMsg("It's ok!");
        }
      })
      .catch(error => this.#onError(error));
  }

  #onUpdateBtnClick(element) {
    if (!element.classList.contains(this.#updateBtnClass)) return;
    const bookId = element.dataset.id;
    const editedBook = this.#libraryObj.getBookById(bookId);
    const inputRef = document
      .querySelector(this.#bookSelector + `[data-id="${bookId}"]`)
      .querySelector('input');
    const updateBook = {
      ...editedBook,
      pointer: inputRef.value,
    };

    this.#dbApi
      .ojectUpdateRequest('book', updateBook)
      .then(({ id }) => {
        if (id) {
          this.#libraryObj.setBookById(bookId, updateBook);
          createOkMsg("It's ok!");
        }
      })
      .catch(error => this.#onError(error));
  }

  onAddFrmSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newBook = {};
    formData.forEach((value, key) => (newBook[key] = value));

    this.#dbApi
      .objectCreateRequest('book', newBook)
      .then(book => {
        this.#libraryObj.addBook(book);
        this.#updateLibraryContainer();
        createOkMsg("It's ok!");
      })
      .catch(error => this.#onError(error));
  }
}

export default LibraryInterface;
