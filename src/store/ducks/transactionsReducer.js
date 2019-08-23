const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
  errorPostTransaction: null,
  loadingTransaction: false,
};

export const Types = {
  GET_TRANSACTIONS: 'GET_TRANSACTIONS_SERVICE',
  GET_SUCCESS_TRANSACTIONS: 'GET_TRANSACTIONS_SUCCESS_SERVICE',
  GET_FAILURE_TRANSACTIONS: 'GET_TRANSACTIONS_FAILURE_SERVICE',
  POST_TRANSACTION: 'POST_TRANSACTION_SERVICE',
  POST_FAILURE_TRANSACTION: 'POST_TRANSACTION_FAILURE_SERVICE',
  POST_SUCCESS_TRANSACTION: 'POST_TRANSACTION_SUCCESS_SERVICE',
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
    default: {
      return state;
    }
  }
};

export const Creators = {
  getTransactions: () => ({
    type: Types.GET_TRANSACTIONS,
  }),
  getSuccessTransactions: transactions => ({
    type: Types.GET_SUCCESS_TRANSACTIONS,
    payload: { data: transactions, loading: false },
  }),
  getFailureTransaction: errorMessage => ({
    type: Types.GET_FAILURE_TRANSACTIONS,
    payload: errorMessage,
  }),
  postTransaction: transaction => ({
    type: Types.POST_TRANSACTION,
    payload: transaction,
  }),
  postSuccessTransaction: () => ({
    type: Types.POST_SUCCESS_TRANSACTION,
    payload: { loading: false },
  }),
  postFailureTransaction: error => ({
    type: Types.POST_FAILURE_TRANSACTION,
    payload: { error, loading: false },
  }),
};

export default transactionsReducer;
