import axios from 'axios';
import {
  SET_NEWS,
  SET_STAFF,
  SET_STAFF_DETAIL,
  BEGIN_DATA_REQUEST,
  SUCCESS_DATA_REQUEST,
  FAIL_DATA_REQUEST,
  SET_BANNER,
} from './actionTypes';

const BASE_URL = 'http://dtd.ntue.edu.tw:8080/wp-json/dtd/v1';

import bannerjson from '../assets/json/banner.json';

export const getNews = async (dispatch, options) => {
  dispatch({ type: BEGIN_DATA_REQUEST });
  const { clickNumber = 1, pageStyle } = options;

  try {
    const url = `${BASE_URL}/post/${pageStyle}?page=${clickNumber}`;
    const response = await axios.get(url);
    const news = response.data;

    dispatch({
      type: SET_NEWS,
      payload: news,
    });
    dispatch({ type: SUCCESS_DATA_REQUEST });
  } catch (error) {
    dispatch({ type: FAIL_DATA_REQUEST, payload: error });
  }
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

export const getBanner = async (dispatch) => {
  dispatch({ type: BEGIN_DATA_REQUEST });
  try {
    //從json取資料
    const banner = bannerjson;
    dispatch({
      type: SET_BANNER,
      payload: banner,
    });
    dispatch({ type: SUCCESS_DATA_REQUEST });
  } catch (error) {
    dispatch({ type: FAIL_DATA_REQUEST, payload: error });
  }
};
