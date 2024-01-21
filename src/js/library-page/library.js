class Library {
  #books = [];

  constructor(books) {
    this.#books = books || [];
  }

  get books() {
    return this.#books;
  }

  set books(newBooks) {
    this.#books = newBooks;
  }

  getBookById(id) {
    return this.#books.find(book => book.id === id);
  }

  setBookById(id, newBook) {
    this.#books = this.#books.map(book => (book.id === id ? newBook : book));
  }

  addBook(newBook) {
    this.#books.push(newBook);
  }

  removeBook(idBook) {
    this.#books = this.#books.filter(book => book.id !== idBook);
  }

  updateBook(updatedBook) {
    this.#books = this.#books.map(book =>
      book.id === updatedBook.id ? updatedBook : book
    );
  }
}

export default Library;
