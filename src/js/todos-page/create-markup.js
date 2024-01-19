function createMarkup(todos) {
  return todos.reduce(
    (strMarkup, { title, completed }) =>
      strMarkup +
      `<li>
        <div>${title}</div>
        <div>${completed ? 'Done' : 'In progress'}</div>  
      </li>
      `,
    ''
  );
}

export default createMarkup;
