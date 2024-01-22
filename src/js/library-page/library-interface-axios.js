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

  async #initData() {
    const res = await this.#axiosInst.get('book');
    if (res?.data) {
      this.#libraryObj.books = res?.data;
      this.#updateLibraryContainer();
    }
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

  async #onDeleteBtnClick(element) {
    if (!element.classList.contains(this.#deleteBtnClass)) return;
    const res = await this.#axiosInst.delete(`book/${element.dataset.id}`);
    if (res?.data) {
      this.#libraryObj.removeBook(res?.data?.id);
      this.#updateLibraryContainer();
      createOkMsg("It's ok!");
    }
  }

  async #onUpdateBtnClick(element) {
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

    const res = await this.#axiosInst.put(`book/${updateBook.id}`, updateBook);
    if (res?.data) {
      this.#libraryObj.setBookById(res?.data?.id, res?.data);
      createOkMsg("It's ok!");
    }
  }

  async onAddFrmSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newBook = {};
    formData.forEach((value, key) => (newBook[key] = value));
    console.log(newBook);

    const res = await this.#axiosInst.post('book', newBook);
    if (res.data) {
      this.#libraryObj.addBook(res.data);
      this.#updateLibraryContainer();
      createOkMsg("It's ok!");
    }
  }
}

export default LibraryInterface;
