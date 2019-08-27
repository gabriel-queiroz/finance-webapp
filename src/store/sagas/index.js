import { all, takeLatest } from 'redux-saga/effects';

import {
  getTransactions,
  postTransaction,
  updateTransaction,
} from './TransactionSaga';
import accountSaga from './accountSaga';
import categorySaga from './categorySaga';
import { Types as TransactionsType } from '../ducks/transactionsReducer';
import { Types as CategoriesType } from '../ducks/categoriesReducer';
import { Types as AccountsType } from '../ducks/accountsReducer';

export default function* rootSaga() {
  yield all([
    takeLatest(TransactionsType.GET_TRANSACTIONS, getTransactions),
    takeLatest(TransactionsType.POST_TRANSACTION, postTransaction),
    takeLatest(TransactionsType.UPDATE_TRANSACTION, updateTransaction),
    takeLatest(CategoriesType.GET_CATEGORIES, categorySaga),
    takeLatest(AccountsType.GET_ACCOUNTS, accountSaga),
  ]);
}
