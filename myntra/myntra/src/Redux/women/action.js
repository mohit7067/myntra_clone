import * as types from "./actionTypes";
import axios from "axios";
const fetchWomenDataRequest = (payload) => {
  return {
    type: types.FETCH_WOMEN_DATA_REQUEST,
    payload,
  };
};

const fetchWomenDataSuccess = (payload) => {
  return {
    type: types.FETCH_WOMEN_DATA_SUCCESS,
    payload,
  };
};
const fetchWomenDataFailure = (payload) => {
  return {
    type: types.FETCH_WOMEN_DATA_FAILURE,
    payload,
  };
};

export const fetchWomenData = (payload) => (dispatch) => {
  dispatch(fetchWomenDataRequest());
  axios
    .get("/womensproduct", {
      params: {
        _page: Number(payload.page),
        _limit: 9,
        category: payload.category,
        brand: payload.brand,
        off_lte: payload.off,
      },
    })
    .then((r) => dispatch(fetchWomenDataSuccess(r.data)))
    .catch((e) => dispatch(fetchWomenDataFailure(e.data)));
};

const fetchSingleWomendataRequest = (payload) => {
  return { type: types.FETCH_SINGLE_WOMEN_REQUEST, payload };
};
const fetchSingleWomendataSuccess = (payload) => {
  return { type: types.FETCH_SINGLE_WOMEN_SUCCESS, payload };
};
const fetchSingleWomendataFailure = (payload) => {
  return { type: types.FETCH_SINGLE_WOMEN_FAILURE, payload };
};

export const fetchSingleWomenData = (id) => (dispatch) => {
  dispatch(fetchSingleWomendataRequest());
  axios
    .get(`/womensproduct/${id}`)
    .then((r) => dispatch(fetchSingleWomendataSuccess(r.data)))
    .catch((e) => dispatch(fetchSingleWomendataFailure(e.data)));
};
