import axios from 'axios';
import {
  SET_NEWS,
  SET_NEWS_DETAIL,
  SET_HONOR_DETAIL,
  SET_HONORS,
  SET_STAFF,
  SET_STAFF_DETAIL,
  BEGIN_DATA_REQUEST,
  SUCCESS_DATA_REQUEST,
  FAIL_DATA_REQUEST,
} from './actionTypes';

const BASE_URL = 'http://dtd.ntue.edu.tw:8080/wp-json/dtd/v1';

// import staffjson from '../assets/json/test.json';

export const getNews = async (dispatch, options) => {
  const { perPage = 5, page = 1 } = options;

  const url = `${BASE_URL}?perPage=${perPage}&page=${page}`;
  const response = await axios.get(url);
  const news = response.data;

  dispatch({
    type: SET_NEWS,
    payload: news,
  });
};

export const getNewsDetail = async (dispatch, options) => {
  const { id } = options;
  if (!id) {
    throw new Error('No id.');
  }

  const url = `${BASE_URL}/${id}`;
  const response = await axios.get(url);
  const newsDetail = response.data;

  dispatch({
    type: SET_NEWS_DETAIL,
    payload: newsDetail,
  });
};

export const getHonors = async (dispatch, options) => {
  const { perPage = 5, page = 1 } = options;

  const url = `${BASE_URL}?perPage=${perPage}&page=${page}`;
  const response = await axios.get(url);
  const honors = response.data;

  dispatch({
    type: SET_HONORS,
    payload: honors,
  });
};

export const getHonorDetail = async (dispatch, options) => {
  const { id } = options;
  if (!id) {
    throw new Error('No id.');
  }

  const url = `${BASE_URL}/${id}`;
  const response = await axios.get(url);
  const honorDetail = response.data;

  dispatch({
    type: SET_HONOR_DETAIL,
    payload: honorDetail,
  });
};

export const getStaff = async (dispatch) => {
  dispatch({ type: BEGIN_DATA_REQUEST });
  //從後台取資料
  const url = `${BASE_URL}/staff`;
  const response = await axios.get(url);
  const staff = response.data;

  //從json取資料
  // const staff = staffjson;

  dispatch({
    type: SET_STAFF,
    payload: staff,
  });
  dispatch({ type: SUCCESS_DATA_REQUEST });
};

export const getStaffDetail = async (dispatch, options) => {
  //從後台取資料
  const { staffpath = '范丙林' } = options;
  //從json取資料
  // const { groupid = 0, teacherid2 = 0 } = options;

  dispatch({ type: BEGIN_DATA_REQUEST });
  try {
    //從後台取資料
    const url = `${BASE_URL}/staff?term=${staffpath}`;
    const response = await axios.get(url);
    const staffDetail = response.data;
    // //從json取資料
    // const staffDetail = staffjson[groupid2].list[teacherid2];

    dispatch({
      type: SET_STAFF_DETAIL,
      payload: staffDetail,
    });
    dispatch({ type: SUCCESS_DATA_REQUEST });
  } catch (error) {
    dispatch({ type: FAIL_DATA_REQUEST, payload: error });
  }
};
