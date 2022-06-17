import * as types from "./actionTypes";
import axios from "axios";
const fetchProductDataRequest = (payload) => {
  return {
    type: types.FETCH_PRODUCTS_DATA_REQUEST,
    payload,
  };
};

const fetchProductDataSuccess = (payload) => {
  return {
    type: types.FETCH_PRODUCTS_DATA_SUCCESS,
    payload,
  };
};
const fetchProductDataFailure = (payload) => {
  return {
    type: types.FETCH_PRODUCTS_DATA_FAILURE,
    payload,
  };
};

export const fetchProductData = (payload) => (dispatch) => {
  dispatch(fetchProductDataRequest());
  axios
    .get("/mensproducts", {
      params: {
        _page: Number(payload.page),
        _limit: 9,
        category: payload.category,
        brand: payload.brand,
        off_lte: payload.off,
      },
    })
    .then((r) => dispatch(fetchProductDataSuccess(r.data)))
    .catch((e) => dispatch(fetchProductDataFailure(e.data)));
};

const fetchSingleproductdataRequest = (payload) => {
  return { type: types.FETCH_SINGLE_PRODUCT_REQUEST, payload };
};
const fetchSingleproductdataSuccess = (payload) => {
  return { type: types.FETCH_SINGLE_PRODUCT_SUCCESS, payload };
};
const fetchSingleproductdataFailure = (payload) => {
  return { type: types.FETCH_SINGLE_PRODUCT_FAILURE, payload };
};

export const fetchSingleproductData = (id) => (dispatch) => {
  dispatch(fetchSingleproductdataRequest());
  axios
    .get(`/mensproducts/${id}`)
    .then((r) => dispatch(fetchSingleproductdataSuccess(r.data)))
    .catch((e) => dispatch(fetchSingleproductdataFailure(e.data)));
};
