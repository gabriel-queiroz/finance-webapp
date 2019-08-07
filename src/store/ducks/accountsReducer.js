const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export const Types = {
  GET_ACCOUNTS: 'ACCOUNTS_SERVICE_GET',
  GET_SUCCESS_GET_ACCOUNTS: 'GET_ACCOUNTS_SUCCESS_SERVICE',
  GET_FAILURE_GET_ACCOUNTS: 'GET_ACCOUNTS_FAILURE_SERVICE',
};

const AccountsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_ACCOUNTS: {
      return { ...state, loading: true, error: null };
    }
    case Types.GET_SUCCESS_GET_ACCOUNTS: {
      return { ...state, data: action.payload, loading: true };
    }
    case Types.GET_FAILURE_GET_ACCOUNTS: {
      return { ...state, error: action.payload, loading: false };
    }
    default: {
      return state;
    }
  }
};

export const Creators = {
  getAccounts: () => ({
    type: Types.GET_ACCOUNTS,
  }),
  getSuccessAccounts: accounts => ({
    type: Types.GET_SUCCESS_GET_ACCOUNTS,
    payload: accounts,
  }),
  getFailureAccounts: errorMessage => ({
    type: Types.GET_FAILURE_GET_ACCOUNTS,
    payload: errorMessage,
  }),
};

export default AccountsReducer;
