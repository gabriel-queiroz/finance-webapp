import { combineReducers } from 'redux';
import transactionsReducer from './transactionsReducer';
import categoriesReducer from './categoriesReducer';
import accountsReducer from './accountsReducer';
import modalTransactionReducer from './modalTransactionReducer';

const reducers = combineReducers({
  transactionsReducer,
  modalTransactionReducer,
  categoriesReducer,
  accountsReducer,
});

export default reducers;
