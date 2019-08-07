import { call, put } from 'redux-saga/effects';
import http from '../../services/http';
import { Creators } from '../ducks/categoriesReducer';

export default function* getCategories() {
  try {
    const { data } = yield call(http.get, '/categories');
    yield put(Creators.getSuccessCategories(data));
  } catch (error) {
    yield put(Creators.getSuccessCategories(error));
  }
}
