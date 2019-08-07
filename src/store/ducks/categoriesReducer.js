const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export const Types = {
  GET_CATEGORIES: 'CATEGORIES_SERVICE_GET',
  GET_SUCCESS_GET_CATEGORIES: 'GET_CATEGORIES_SUCCESS_SERVICE',
  GET_FAILURE_GET_CATEGORIES: 'GET_CATEGORIES_FAILURE_SERVICE',
};

const CategoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_CATEGORIES: {
      return { ...state, loading: true, error: null };
    }
    case Types.GET_SUCCESS_GET_CATEGORIES: {
      return { ...state, data: action.payload, loading: true };
    }
    case Types.GET_FAILURE_GET_CATEGORIES: {
      return { ...state, error: action.payload, loading: false };
    }
    default: {
      return state;
    }
  }
};

export const Creators = {
  getCategories: () => ({
    type: Types.GET_CATEGORIES,
  }),
  getSuccessCategories: CATEGORIES => ({
    type: Types.GET_SUCCESS_GET_CATEGORIES,
    payload: CATEGORIES,
  }),
  getFailureCategories: errorMessage => ({
    type: Types.GET_FAILURE_GET_CATEGORIES,
    payload: errorMessage,
  }),
};

export default CategoriesReducer;
