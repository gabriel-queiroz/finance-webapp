import { all, takeLatest } from 'redux-saga/effects';

import transactionSaga from './transactionSaga';
import { Types as TransactionsType } from '../ducks/transactionsReducer';

export default function* rootSaga() {
  yield all([takeLatest(TransactionsType.GET_TRANSACTIONS, transactionSaga)]);
}
