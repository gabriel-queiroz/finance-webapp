import moment from 'moment';

const INITIAL_STATE = {
  visable: false,
  transactionType: '',
  transaction: {},
  isEdit: false,
};

export const Types = {
  OPEN: 'modal/OPEN',
  CLOSE: 'modal/CLOSE',
};

export const ModalTransactionTypes = {
  RECIPE: 'RECIPE',
  EXPENSE: 'EXPENSE',
};

const modalTransactionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.OPEN: {
      return { ...state, ...action.payload };
    }
    case Types.CLOSE: {
      return {
        ...state,
        visable: action.payload,
        isEdit: false,
        transaction: {},
      };
    }
    default: {
      return state;
    }
  }
};

export const Creators = {
  openModal: (transactionType, transaction, isEdit = false) => {
    if (!transaction) {
      transaction = {};
    } else {
      transaction = {
        ...transaction,
        createdAt: moment(transaction),
        category: transaction.category.id,
        account: transaction.account.id,
      };
    }

    const data = {
      type: Types.OPEN,
      payload: {
        visable: true,
        transactionType,
        transaction,
        isEdit,
      },
    };

    return data;
  },
  closeModal: () => ({
    type: Types.CLOSE,
    payload: false,
  }),
};

export default modalTransactionReducer;
