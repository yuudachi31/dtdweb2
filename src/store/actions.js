import axios from 'axios';
import {
  SET_NEWS,
  SET_STAFF,
  SET_STAFF_DETAIL,
  SET_GRADUATONWORKS_SHOW,
  SET_GRADUATONWORKS_DETAIL,
  BEGIN_DATA_REQUEST,
  SUCCESS_DATA_REQUEST,
  FAIL_DATA_REQUEST,
  SET_BANNER,
  SET_COOPERATIONWORKS,
  SET_COOPERATIONWORKS_DETAIL,
  SET_WORKS_SORT,
  SET_WORKSSORT_ACTIVEITEM,
} from './actionTypes';

const BASE_URL = 'http://dtd.ntue.edu.tw:8080/wp-json/dtd/v1';

// import bannerjson from '../assets/json/banner.json';
// import staffjson from '../assets/json/teachers.json';
//import gwjson from '../assets/json/works.json';

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
  try {
    //從後台取資料
    const url = `${BASE_URL}/staff`;
    const response = await axios.get(url);
    const staff = response.data;

    //從json取資料
    // const staff = staffjson;
    // console.log(response);
    dispatch({
      type: SET_STAFF,
      payload: staff,
    });
    dispatch({ type: SUCCESS_DATA_REQUEST });
  } catch (error) {
    dispatch({ type: FAIL_DATA_REQUEST, payload: error });
    console.log(error);
  }
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
    //從後台取資料
    const url = `${BASE_URL}/banner`;
    const response = await axios.get(url);
    const banner = response.data;
    //從json取資料
    // const banner = bannerjson;
    dispatch({
      type: SET_BANNER,
      payload: banner,
    });
    dispatch({ type: SUCCESS_DATA_REQUEST });
  } catch (error) {
    dispatch({ type: FAIL_DATA_REQUEST, payload: error });
  }
};
export const getGraduationWorks = async (dispatch) => {
  dispatch({ type: BEGIN_DATA_REQUEST });
  try {
    //從後台取資料
    const url = `${BASE_URL}/graduateProject`;
    const response = await axios.get(url);
    const works = response.data;
    var worksSortArray = ['所有'];
    works.map((work) => worksSortArray.push(work.sortTitle));
    //從json取資料
    // const works = gwjson;
    dispatch({
      type: SET_WORKSSORT_ACTIVEITEM,
      payload: '所有',
    });
    dispatch({
      type: SET_GRADUATONWORKS_SHOW,
      payload: works,
    });
    dispatch({
      type: SET_WORKS_SORT,
      payload: worksSortArray,
    });
    dispatch({ type: SUCCESS_DATA_REQUEST });
  } catch (error) {
    dispatch({ type: FAIL_DATA_REQUEST, payload: error });
    console.log(error);
  }
};
export const setWorksSortActiveItem = async (dispatch) => {
  dispatch({
    type: SET_WORKSSORT_ACTIVEITEM,
    payload: '所有',
  });
};
export const getGraduationWorksShow = async (dispatch, options) => {
  const { sort = 109 } = options;
  dispatch({ type: BEGIN_DATA_REQUEST });
  try {
    //從後台取資料
    const url = `${BASE_URL}/graduateProject?graduateYear=${sort}`;
    const response = await axios.get(url);
    const works = response.data;
    //從json取資料
    // const works = gwjson;
    dispatch({
      type: SET_WORKSSORT_ACTIVEITEM,
      payload: sort,
    });
    dispatch({
      type: SET_GRADUATONWORKS_SHOW,
      payload: works,
    });
    dispatch({ type: SUCCESS_DATA_REQUEST });
  } catch (error) {
    dispatch({ type: FAIL_DATA_REQUEST, payload: error });
    console.log(error);
  }
};

export const getGraduationWorksDetail = async (dispatch, options) => {
  //從後台取資料
  const { workId = 0 } = options;
  //從json取資料
  // const { groupid = 0, teacherid2 = 0 } = options;

  dispatch({ type: BEGIN_DATA_REQUEST });
  try {
    //從後台取資料
    const url = `${BASE_URL}/graduateProject?postID=${workId}`;
    const response = await axios.get(url);
    const worksDetail = response.data;
    // //從json取資料
    //const worksDetail = gwjson[groupid2].list[teacherid2];

    dispatch({
      type: SET_GRADUATONWORKS_DETAIL,
      payload: worksDetail,
    });
    dispatch({ type: SUCCESS_DATA_REQUEST });
  } catch (error) {
    dispatch({ type: FAIL_DATA_REQUEST, payload: error });
  }
};

export const getCooperationWorks = async (dispatch) => {
  dispatch({ type: BEGIN_DATA_REQUEST });
  try {
    //從後台取資料
    const url = `${BASE_URL}/cooperateProject`;
    const response = await axios.get(url);
    const works = response.data;
    //從json取資料
    // const works = gwjson;
    dispatch({
      type: SET_COOPERATIONWORKS,
      payload: works,
    });
    dispatch({ type: SUCCESS_DATA_REQUEST });
  } catch (error) {
    dispatch({ type: FAIL_DATA_REQUEST, payload: error });
    console.log(error);
  }
};

export const getCooperationWorksDetail = async (dispatch, options) => {
  //從後台取資料
  const { workId = 0 } = options;
  //從json取資料
  // const { groupid = 0, teacherid2 = 0 } = options;

  dispatch({ type: BEGIN_DATA_REQUEST });
  try {
    //從後台取資料
    const url = `${BASE_URL}/cooperateProject?postID=${workId}`;
    const response = await axios.get(url);
    const worksDetail = response.data;
    // //從json取資料
    //const worksDetail = gwjson[groupid2].list[teacherid2];

    dispatch({
      type: SET_COOPERATIONWORKS_DETAIL,
      payload: worksDetail,
    });
    dispatch({ type: SUCCESS_DATA_REQUEST });
  } catch (error) {
    dispatch({ type: FAIL_DATA_REQUEST, payload: error });
  }
};
