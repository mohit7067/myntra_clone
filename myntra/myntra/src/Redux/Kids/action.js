import * as types from "./actionTypes";
import axios from "axios";
const fetchKidsDataRequest = (payload) => {
  return {
    type: types.FETCH_KIDS_DATA_REQUEST,
    payload,
  };
};

const fetchKidsDataSuccess = (payload) => {
  return {
    type: types.FETCH_KIDS_DATA_SUCCESS,
    payload,
  };
};
const fetchKidsDataFailure = (payload) => {
  return {
    type: types.FETCH_KIDS_DATA_FAILURE,
    payload,
  };
};

export const fetchKidsData = (payload) => (dispatch) => {
  dispatch(fetchKidsDataRequest());
  axios
    .get("/kids", {
      params: {
        _page: Number(payload.page),
        _limit: 9,
        category: payload.category,
        brand: payload.brand,
        off_lte: payload.off,
      },
    })
    .then((r) => dispatch(fetchKidsDataSuccess(r.data)))
    .catch((e) => dispatch(fetchKidsDataFailure(e.data)));
};

const fetchSingleKidsdataRequest = (payload) => {
  return { type: types.FETCH_SINGLE_KIDS_REQUEST, payload };
};
const fetchSingleKidsdataSuccess = (payload) => {
  return { type: types.FETCH_SINGLE_KIDS_SUCCESS, payload };
};
const fetchSingleKidsdataFailure = (payload) => {
  return { type: types.FETCH_SINGLE_KIDS_FAILURE, payload };
};

export const fetchSingleKidsData = (id) => (dispatch) => {
  dispatch(fetchSingleKidsdataRequest());
  axios
    .get(`/kids/${id}`)
    .then((r) => dispatch(fetchSingleKidsdataSuccess(r.data)))
    .catch((e) => dispatch(fetchSingleKidsdataFailure(e.data)));
};
