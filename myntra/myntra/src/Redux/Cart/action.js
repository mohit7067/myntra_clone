import * as types from "./actionType";
import axios from "axios";
export const fetchAddMensRequest = (payload) => {
  return {
    type: types.FETCH_ADDMENS_DATA_REQUEST,
    payload,
  };
};
export const fetchAddMensSuccess = (payload) => {
  return {
    type: types.FETCH_ADDMENS_DATA_SUCCESS,
    payload,
  };
};
export const fetchAddMensFailure = (payload) => {
  return {
    type: types.FETCH_ADDMENS_DATA_FAILURE,
    payload,
  };
};

export const fetchAddData = (product) => (dispatch) => {
  dispatch(fetchAddMensRequest());

  axios
    .post("/cart", product)
    .then((r) => fetchAddMensSuccess(r.data))
    .catch((e) => fetchAddMensFailure(e.data));
};

export const fetchCartRequest = (payload) => {
  return {
    type: types.FETCH_CART_DATA_REQUEST,
    payload,
  };
};
export const fetchCartSuccess = (payload) => {
  return {
    type: types.FETCH_CART_DATA_SUCCESS,
    payload,
  };
};
export const fetchCartFailure = (payload) => {
  return {
    type: types.FETCH_CART_DATA_FAILURE,
    payload,
  };
};

export const fetchCartData = (payload) => (dispatch) => {
  dispatch(fetchCartRequest());
  axios
    .get("/cart")
    .then((r) => dispatch(fetchCartSuccess(r.data)))
    .catch((e) => dispatch(fetchCartFailure(e.data)));
};
