const INITIAL_STATE = {
  visable: false,
  transactionType: '',
};

export const Types = {
  OPEN: 'modal/OPEN',
  CLOSE: 'modal/CLOSE',
};

export const ModalTransactionTypes = {
  RECIPE: 'TRANSACTION_RECIPE',
  EXPENSE: 'TRANSACTION_EXPENSE',
};

const modalTransactionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.OPEN: {
      return { ...state, ...action.payload };
    }
    case Types.CLOSE: {
      return { ...state, visable: action.payload };
    }
    default: {
      return state;
    }
  }
};

export const Creators = {
  openModal: transactionType => ({
    type: Types.OPEN,
    payload: {
      visable: true,
      transactionType,
    },
  }),
  closeModal: () => ({
    type: Types.CLOSE,
    payload: false,
  }),
};

export default modalTransactionReducer;
