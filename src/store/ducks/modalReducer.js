const INITIAL_STATE = {
  visable: true,
};

export const Types = {
  OPEN: 'modal/OPEN',
  CLOSE: 'modal/CLOSE',
};

const modalReducer = (state = INITIAL_STATE, action) => {
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

export const openModal = () => ({
  type: Types.OPEN,
  payload: true,
});

export const closeModal = () => ({
  type: Types.CLOSE,
  payload: false,
});

export default modalReducer;
