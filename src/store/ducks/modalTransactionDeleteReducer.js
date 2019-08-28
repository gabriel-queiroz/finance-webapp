const INITIAL_STATE = {
  transaction: {},
  visible: false,
};

export const Types = {
  OPEN: 'MODAL_TRANSACTION_DELETE_OPEN',
  CLOSE: 'MODAL_TRANSACTION_DELETE_CLOSE',
};

const ModalTransactionDeleteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.OPEN:
      return { ...state, visible: true, ...action.payload };
    case Types.CLOSE:
      return { ...state, visible: false, transaction: {} };

    default:
      return state;
  }
};

export const Creators = {
  open: transaction => ({ type: Types.OPEN, payload: { transaction } }),
  close: () => ({ type: Types.CLOSE }),
};

export default ModalTransactionDeleteReducer;
