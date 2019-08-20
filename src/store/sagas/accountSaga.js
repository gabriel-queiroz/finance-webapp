import { call, put } from 'redux-saga/effects';
import http from 'services/http';
import { Creators } from 'store/ducks/accountsReducer';

export default function* getAccounts() {
  try {
    const { data } = yield call(http.get, '/accounts');
    yield put(Creators.getSuccessAccounts(data));
  } catch (error) {
    yield put(Creators.getFailureAccounts(error));
  }
}
