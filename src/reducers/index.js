import { combineReducers } from 'redux';

import BooksReducer from './reducer_books';
import TestReducer from './reducer_test';

const rootReducer = combineReducers({
  books: BooksReducer,
  people: TestReducer
});

export default rootReducer;
