import * as types from "./actionTypes";

const initState = {
  loading: true,
  error: false,
  women: [],
  currentProduct: {},
};

export const WomenReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.FETCH_WOMEN_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case types.FETCH_WOMEN_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        women: payload,
      };
    case types.FETCH_WOMEN_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case types.FETCH_SINGLE_WOMEN_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case types.FETCH_SINGLE_WOMEN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        currentProduct: payload,
      };
    case types.FETCH_SINGLE_WOMEN_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
