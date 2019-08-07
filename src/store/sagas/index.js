import { all, takeLatest } from 'redux-saga/effects';

import transactionSaga from './transactionSaga';
import accountSaga from './accountSaga';
import categorySaga from './categorySaga';
import { Types as TransactionsType } from '../ducks/transactionsReducer';
import { Types as CategoriesType } from '../ducks/categoriesReducer';
import { Types as AccountsType } from '../ducks/accountsReducer';

export default function* rootSaga() {
  yield all([
    takeLatest(TransactionsType.GET_TRANSACTIONS, transactionSaga),
    takeLatest(CategoriesType.GET_CATEGORIES, categorySaga),
    takeLatest(AccountsType.GET_ACCOUNTS, accountSaga),
  ]);
}
