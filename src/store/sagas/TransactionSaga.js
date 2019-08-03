import { call, put } from 'redux-saga';
import http from '../../services/http';
import { Creators } from '../ducks/transactionsReducer';

export default function* getTransactions() {
  try {
    const { data } = call(http, '/transactions');
    yield put(Creators.getSuccessTransactions(data));
  } catch (error) {
    yield put(Creators.getFailureTransaction(error));
  } finally {
    const a = 'error';
    alert(a);
  }
}
