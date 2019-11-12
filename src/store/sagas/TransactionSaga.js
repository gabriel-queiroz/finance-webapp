import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { Creators as TransactionsCreators } from 'store/ducks/transactionsReducer';
import http from 'services/http';
import { Creators as ModalTransactionCreators } from 'store/ducks/modalTransactionReducer';
import { Creators as ModalTransactionDeleteCreators } from 'store/ducks/modalTransactionDeleteReducer';

export function* getTransactions() {
  try {
    const { data } = yield call(http.get, '/transactions');
    yield put(TransactionsCreators.getSuccessTransactions(data.transactions));
  } catch (error) {
    yield put(TransactionsCreators.getFailureTransaction(error));
  }
}

export function* postTransaction(action) {
  try {
    yield call(http.post, '/transactions', action.payload);
    yield put(ModalTransactionCreators.closeModal());
    yield put(TransactionsCreators.getTransactions());
    yield put(TransactionsCreators.postSuccessTransaction());
    toast.success('Transação criada com sucesso!');
  } catch (error) {
    toast.error('Ops erro ao atualizar transação');
    yield put(TransactionsCreators.postFailureTransaction(error));
  }
}

export function* updateTransaction({ payload: { id, ...transaction } }) {
  try {
    yield call(http.put, `/transactions/${id}`, transaction);
    yield put(ModalTransactionCreators.closeModal());
    yield put(TransactionsCreators.updateSuccessTransaction());
    toast.success('Transação atualizada com sucesso!');
    yield put(TransactionsCreators.getTransactions());
  } catch (error) {
    toast.error('Ops erro ao criar transação');
    yield put(TransactionsCreators.updateFailureTransaction(error));
  }
}

export function* deleteTransaction({ payload: id }) {
  try {
    yield call(http.delete, `/transactions/${id}`);
    toast.success('Transação deletada com sucesso');
    yield put(ModalTransactionDeleteCreators.close());
    yield put(TransactionsCreators.getTransactions());
  } catch (error) {
    toast.error('Ops! Erro ao deletar transação');
    yield put(ModalTransactionDeleteCreators.deleteFailureTransaction(error));
  }
}
