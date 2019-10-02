const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
  errorPostTransaction: null,
  loadingTransaction: false
};

export const Types = {
  GET_TRANSACTIONS: 'GET_TRANSACTIONS_SERVICE',
  GET_SUCCESS_TRANSACTIONS: 'GET_TRANSACTIONS_SUCCESS_SERVICE',
  GET_FAILURE_TRANSACTIONS: 'GET_TRANSACTIONS_FAILURE_SERVICE',
  POST_TRANSACTION: 'POST_TRANSACTION_SERVICE',
  POST_FAILURE_TRANSACTION: 'POST_TRANSACTION_FAILURE_SERVICE',
  POST_SUCCESS_TRANSACTION: 'POST_TRANSACTION_SUCCESS_SERVICE',
  UPDATE_TRANSACTION: 'UPDATE_TRANSACTION_SERVICE',
  UPDATE_FAILURE_TRANSACTION: 'UPDATE_TRANSACTION_FAILURE_SERVICE',
  UPDATE_SUCCESS_TRANSACTION: 'UPDATE_TRANSACTION_SUCCESS_SERVICE',
  DELETE_TRANSACTION: 'DELETE_TRANSACTION_SERVICE',
  DELETE_FAILURE_TRANSACTION: 'DELETE_TRANSACTION_FAILURE_SERVICE',
  DELETE_SUCCESS_TRANSACTION: 'DELETE_TRANSACTION_SUCCESS_SERVICE'
};

const transactionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_TRANSACTIONS: {
      return { ...state, loading: true, error: null };
    }
    case Types.GET_SUCCESS_TRANSACTIONS: {
      return { ...state, ...action.payload };
    }
    case Types.GET_FAILURE_TRANSACTIONS: {
      return { ...state, error: action.payload };
    }
    case Types.POST_TRANSACTION: {
      return { ...state, loading: true };
    }
    case Types.POST_SUCCESS_TRANSACTION: {
      return { ...state, ...action.payload };
    }
    case Types.POST_FAILURE_TRANSACTION: {
      return { ...state, ...action.payload };
    }
    case Types.UPDATE_TRANSACTION: {
      return { ...state, loading: true };
    }
    case Types.UPDATE_SUCCESS_TRANSACTION: {
      return { ...state, loading: false };
    }
    case Types.UPDATE_FAILURE_TRANSACTION: {
      return { ...state, ...action.payload };
    }
    case Types.DELETE_TRANSACTION: {
      return { ...state, loading: true };
    }
    case Types.DELETE_SUCCESS_TRANSACTION: {
      return { ...state, loading: false };
    }
    case Types.DELETE_FAILURE_TRANSACTION: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
};

export const Creators = {
  getTransactions: () => ({
    type: Types.GET_TRANSACTIONS
  }),
  getSuccessTransactions: transactions => ({
    type: Types.GET_SUCCESS_TRANSACTIONS,
    payload: { data: transactions, loading: false }
  }),
  getFailureTransaction: errorMessage => ({
    type: Types.GET_FAILURE_TRANSACTIONS,
    payload: errorMessage
  }),
  postTransaction: transactionId => ({
    type: Types.POST_TRANSACTION,
    payload: transactionId
  }),
  postSuccessTransaction: () => ({
    type: Types.POST_SUCCESS_TRANSACTION,
    payload: { loading: false }
  }),
  postFailureTransaction: error => ({
    type: Types.POST_FAILURE_TRANSACTION,
    payload: { error, loading: false }
  }),
  updateTransaction: transaction => ({
    type: Types.UPDATE_TRANSACTION,
    payload: transaction
  }),
  updateSuccessTransaction: () => ({
    type: Types.UPDATE_SUCCESS_TRANSACTION,
    payload: { loading: false }
  }),
  updateFailureTransaction: error => ({
    type: Types.DELETE_FAILURE_TRANSACTION,
    payload: { error, loading: false }
  }),
  deleteTransaction: transaction => ({
    type: Types.DELETE_TRANSACTION,
    payload: transaction
  }),
  deleteSuccessTransaction: () => ({
    type: Types.DELETE_SUCCESS_TRANSACTION,
    payload: { loading: false }
  }),
  deleteFailureTransaction: error => ({
    type: Types.DELETE_FAILURE_TRANSACTION,
    payload: { error, loading: false }
  })
};
export default transactionsReducer;
