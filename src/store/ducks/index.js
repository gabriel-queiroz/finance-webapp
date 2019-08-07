import { combineReducers } from 'redux';
import transactionsReducer from './transactionsReducer';
import categoriesReducer from './categoriesReducer';
import accountsReducer from './accountsReducer';
import modalReducer from './modalReducer';

const reducers = combineReducers({
  transactionsReducer,
  modalReducer,
  categoriesReducer,
  accountsReducer,
});

export default reducers;
