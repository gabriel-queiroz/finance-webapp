import { call, put } from 'redux-saga/effects';
import http from '../../services/http';
import { Creators } from '../ducks/transactionsReducer';

export default function* getTransactions() {
  try {
    const { data } = yield call(http.get, '/transactions');
    yield put(Creators.getSuccessTransactions(data));
  } catch (error) {
    yield put(Creators.getFailureTransaction(error));
  }
}
