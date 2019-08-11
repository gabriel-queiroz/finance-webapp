import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import http from '../../services/http';
import { Creators as TransactionsCreators } from '../ducks/transactionsReducer';
import { Creators as ModalCreators } from '../ducks/modalReducer';

export function* getTransactions() {
  try {
    const { data } = yield call(http.get, '/transactions');
    yield put(TransactionsCreators.getSuccessTransactions(data));
  } catch (error) {
    yield put(TransactionsCreators.getFailureTransaction(error));
  }
}

export function* postTransaction(action) {
  try {
    yield call(http.post, '/transactions', action.payload);
    yield put(ModalCreators.closeModal());
    yield put(TransactionsCreators.getTransactions());
    yield put(TransactionsCreators.postSuccessTransaction());
    toast.success('Transação criada com sucesso!');
  } catch (error) {
    yield put(TransactionsCreators.postFailureTransaction(error));
  }
}
