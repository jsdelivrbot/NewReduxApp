export function selectBook(book) {
  // selectBook should return an action, an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
