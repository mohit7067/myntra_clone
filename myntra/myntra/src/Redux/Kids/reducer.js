import * as types from "./actionTypes";

const initState = {
  loading: true,
  error: false,
  kids: [],
  cart: [],
  currentProduct: {},
};

export const KidsReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.FETCH_KIDS_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case types.FETCH_KIDS_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        kids: payload,
      };
    case types.FETCH_KIDS_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case types.FETCH_SINGLE_KIDS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case types.FETCH_SINGLE_KIDS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        currentProduct: payload,
      };
    case types.FETCH_SINGLE_KIDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
