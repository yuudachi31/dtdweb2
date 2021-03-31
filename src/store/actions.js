import axios from 'axios';
import {
  SET_NEWS,
  SET_NEWS_DETAIL,
  SET_HONOR_DETAIL,
  SET_HONORS,
  SET_STAFF,
  SET_STAFF_DETAIL,
} from './actionTypes';

const BASE_URL = '';

import staffjson from '../assets/json/teachers.json';

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
  //從後台取資料
  // const url = `${BASE_URL}?perPage=${perPage}&page=${page}`;
  // const response = await axios.get(url);
  // const staff = response.data;

  //從json取資料
  const staff = staffjson;
  console.log(staff);

  dispatch({
    type: SET_STAFF,
    payload: staff,
  });
};

export const getStaffDetail = async (dispatch, options) => {
  const { groupid2 = 0, teacherid2 = 0 } = options;
  // if (!id) {
  //   throw new Error('No id.');
  // }

  //從後台取資料
  // const url = `${BASE_URL}/${id}`;
  // const response = await axios.get(url);
  // const staffDetail = response.data;

  //從json取資料
  const staffDetail = staffjson[groupid2].list[teacherid2];

  dispatch({
    type: SET_STAFF_DETAIL,
    payload: staffDetail,
  });
};
