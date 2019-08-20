import { call, put } from 'redux-saga/effects';
import { Creators } from 'store/ducks/categoriesReducer';
import http from 'services/http';

export default function* getCategories() {
  try {
    const { data } = yield call(http.get, '/categories');
    yield put(Creators.getSuccessCategories(data));
  } catch (error) {
    yield put(Creators.getSuccessCategories(error));
  }
}
