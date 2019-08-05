const INITIAL_STATE = {
  data: [
    {
      _id: 456,
      date: '23/11/2018',
      description: 'Salário Mensal',
      value: 1999.99,
      type: 'RECIPE',
      account: 'Nubank',
      category: 'Almoço Empresa',
    },
    {
      _id: 123,
      date: '23/11/2011',
      description: 'Almoço Jardim',
      value: -12,
      type: 'EXPENSE',
      account: 'Nubank',
      category: 'Almoço Empresa',
    },
    {
      _id: 123,
      date: '23/11/2011',
      description: 'Almoço Jardim',
      value: -12,
      type: 'EXPENSE',
      account: 'Nubank',
      category: 'Almoço Empresa',
    },
    {
      _id: 123,
      date: '23/11/2011',
      description: 'Freela react native',
      value: 100.0,
      type: 'RECIPE',
      account: 'Neon',
      category: 'Almoço Empresa',
    },
  ],
  loading: false,
  error: null,
};

export const Types = {
  GET_TRANSACTIONS: 'TRANSACTIONS_SERVICE_GET',
  GET_SUCCESS_TRANSACTIONS: 'GET_TRANSACTIONS_SUCCESS_SERVICE',
  GET_FAILURE_TRANSACTIONS: 'GET_TRANSACTIONS_FAILURE_SERVICE',
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
};

export default transactionsReducer;
