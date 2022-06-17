import * as types from "./actionType";

const initState = {
  loading: true,
  error: true,
  cart: [],
};

export const CartReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_ADDMENS_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case types.FETCH_ADDMENS_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        cart: [...state, payload],
      };
    case types.FETCH_ADDMENS_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case types.FETCH_CART_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case types.FETCH_CART_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        cart: payload,
      };
    case types.FETCH_CART_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
