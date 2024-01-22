import Library from './library.js';
import axios from 'axios';
import { createOkMsg, createErrMsg } from '../common/create-msg.js';

class LibraryInterface {
  #libraryObj;
  #addFrm;
  #updateBtnClass;
  #deleteBtnClass;
  #bookSelector;
  #booksCounter;
  #libraryContainer;
  #renderingFn;
  #axiosInst;
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
    this.#axiosInst = axios.create({
      baseURL: dbURL,
      headers: { 'Content-Type': 'application/json' },
    });

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
    this.#axiosInst
      .get('book')
      .then(res => {
        this.#libraryObj.books = res.data;
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
    this.#axiosInst
      .delete(`book/${element.dataset.id}`)
      .then(res => {
        const book = res.data;
        this.#libraryObj.removeBook(book.id);
        this.#updateLibraryContainer();
        createOkMsg("It's ok!");
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

    this.#axiosInst
      .put(`book/${updateBook.id}`, updateBook)
      .then(res => {
        const book = res.data;
        if (book) {
          this.#libraryObj.setBookById(book.id, book);
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

    this.#axiosInst
      .post('book', newBook)
      .then(res => {
        const book = res.data;
        if (book) {
          this.#libraryObj.addBook(book);
          this.#updateLibraryContainer();
          createOkMsg("It's ok!");
        }
      })
      .catch(error => this.#onError(error));
  }
}

export default LibraryInterface;
