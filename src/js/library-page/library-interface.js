import Library from './library.js';
import DbApi from '../api/db-api.js';
import { createOkMsg, createErrMsg } from '../common/create-msg';

class LibraryInterface {
  #libraryObj;
  #addBtn;
  #updateBtnClass;
  #deleteBtnClass;
  #bookSelector;
  #booksCounter;
  #libraryContainer;
  #renderingFn;
  #dbApi;
  constructor({
    addBtnSelector,
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
    this.#addBtn = document.querySelector(addBtnSelector);
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
    this.#addBtn.addEventListener('click', this.onAddBtnClick.bind(this));
  }

  #removeHandles() {
    this.#libraryContainer.removeEventListener(
      'click',
      this.onLibraryContainerClick.bind(this)
    );
    this.#addBtn.removeEventListener('click', this.onAddBtnClick.bind(this));
  }

  #updateLibraryContainer() {
    this.#renderingFn(this.#libraryObj.books, this.#libraryContainer);
  }

  #onError(error) {
    console.log(error);
  }

  onLibraryContainerClick(event) {
    const element = event.target;
    this.#onDeleteBtnClick(element);
    this.#onUpdateBtnClick(element);
  }

  onAddBtnClick() {}

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
    this.#libraryObj.setBookById(bookId, updateBook);
    this.#dbApi
      .ojectUpdateRequest('book', updateBook)
      .then(({ id }) => {
        if (id) {
          createOkMsg("It's ok!");
        }
      })
      .catch(error => this.#onError(error));
  }
}

export default LibraryInterface;
