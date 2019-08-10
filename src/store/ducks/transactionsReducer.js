const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
  loadingTransaction: false,
};

export const Types = {
  GET_TRANSACTIONS: 'GET_TRANSACTIONS_SERVICE',
  GET_SUCCESS_TRANSACTIONS: 'GET_TRANSACTIONS_SUCCESS_SERVICE',
  GET_FAILURE_TRANSACTIONS: 'GET_TRANSACTIONS_FAILURE_SERVICE',
  POST_TRANSACTION: 'POST_TRANSACTION_SERVICE',
};

const transactionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_TRANSACTIONS: {
      return { ...state, loading: true, error: null };
    }
    case Types.GET_SUCCESS_TRANSACTIONS: {
      return { ...state, data: action.payload, loading: true };
    }
    case Types.GET_FAILURE_TRANSACTIONS: {
      return { ...state, error: action.payload, loading: false };
    }
    case Types.POST_TRANSACTION: {
      return { ...state, loadingTransaction: true };
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
    payload: transactions,
  }),
  getFailureTransaction: errorMessage => ({
    type: Types.GET_FAILURE_TRANSACTIONS,
    payload: errorMessage,
  }),
  postTransaction: transaction => ({
    type: Types.POST_TRANSACTION,
    payload: transaction,
  }),
};

export default transactionsReducer;
