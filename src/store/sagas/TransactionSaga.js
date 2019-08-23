import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { Creators as TransactionsCreators } from 'store/ducks/transactionsReducer';
import http from 'services/http';
import { Creators as ModalTrasactionCreators } from 'store/ducks/modalTransactionReducer';

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
    yield put(ModalTrasactionCreators.closeModal());
    yield put(TransactionsCreators.getTransactions());
    yield put(TransactionsCreators.postSuccessTransaction());
    toast.success('Transação criada com sucesso!');
  } catch (error) {
    toast.error('Ops erro ao criar transação');
    yield put(TransactionsCreators.postFailureTransaction(error));
  }
}
