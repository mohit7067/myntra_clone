import * as types from "./actionTypes";

const initState = {
  loading: true,
  error: false,
  men: [],
  currentProduct: {},
};

export const ProdutsReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.FETCH_PRODUCTS_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case types.FETCH_PRODUCTS_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        men: payload,
      };
    case types.FETCH_PRODUCTS_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case types.FETCH_SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case types.FETCH_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        currentProduct: payload,
      };
    case types.FETCH_SINGLE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
