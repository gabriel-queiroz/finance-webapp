import { combineReducers } from 'redux';
import transactionsReducer from './transactionsReducer';
import categoriesReducer from './categoriesReducer';
import accountsReducer from './accountsReducer';
import modalTransactionReducer from './modalTransactionReducer';
import modalTransactionDeleteReducer from './modalTransactionDeleteReducer';

const reducers = combineReducers({
  transactionsReducer,
  modalTransactionReducer,
  categoriesReducer,
  accountsReducer,
  modalTransactionDeleteReducer
});

export default reducers;
