import { combineReducers } from 'redux';
import transactionsReducer from './transactionsReducer';
import modalReducer from './modalReducer';

const reducers = combineReducers({ transactionsReducer, modalReducer });

export default reducers;
