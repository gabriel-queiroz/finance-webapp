const INITIAL_STATE = {
  visable: false,
};

export const Types = {
  OPEN: 'modal/OPEN',
  CLOSE: 'modal/CLOSE',
};

const modalTransactionReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case Types.OPEN: {
      console.log('entrou aqui2');
      return { ...state, visable: action.payload };
    }
    case Types.CLOSE: {
      console.log('entrou aqui');
      return { ...state, visable: action.payload };
    }
    default: {
      return state;
    }
  }
};

export const Creators = {
  openModal: () => ({
    type: Types.OPEN,
    payload: true,
  }),
  closeModal: () => ({
    type: Types.CLOSE,
    payload: false,
  }),
};

export default modalTransactionReducer;
