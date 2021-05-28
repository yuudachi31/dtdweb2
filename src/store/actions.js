import axios from 'axios';
import {
  SET_NEWS,
  SET_NEWINFO,
  SET_STAFF,
  SET_STAFF_DETAIL,
  SET_WORKS_SORT,
  SET_WORKSSORT_ACTIVEITEM,
  SET_GRADUATONWORKS_SHOW,
  SET_GRADUATONWORKS_DETAIL,
  SET_COURSEWORKS_SHOW,
  SET_COURSEWORKS_DETAIL,
  SET_COOPERATIONWORKS,
  SET_COOPERATIONWORKS_DETAIL,
  BEGIN_DATA_REQUEST,
  SUCCESS_DATA_REQUEST,
  FAIL_DATA_REQUEST,
  SET_BANNER,
  SET_HOME_NEWS,
} from './actionTypes';

const BASE_URL = 'http://dtd.ntue.edu.tw:8080/wp-json/dtd/v1';

// import bannerjson from '../assets/json/banner.json';
// import staffjson from '../assets/json/teachers.json';
//import gwjson from '../assets/json/works.json';
// import newsjson from '../assets/json/news.json';

export const getNews = async (dispatch, options) => {
  dispatch({ type: BEGIN_DATA_REQUEST });
  const { clickNumber = 1, pageStyle } = options;

  try {
    const url = `${BASE_URL}/post/${pageStyle}Page?page=${clickNumber}`;
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

export const getNewInfo = async (dispatch, options) => {
  dispatch({ type: BEGIN_DATA_REQUEST });
  const { newID } = options;

  try {
    const url = `${BASE_URL}/post?postID=${newID}`;
    const response = await axios.get(url);
    const newInfo = response.data;

    dispatch({
      type: SET_NEWINFO,
      payload: newInfo,
    });
    dispatch({ type: SUCCESS_DATA_REQUEST });
  } catch (error) {
    dispatch({ type: FAIL_DATA_REQUEST, payload: error });
  }
};

//取得全部教職員資料
export const getStaff = async (dispatch) => {
  dispatch({ type: BEGIN_DATA_REQUEST });
  try {
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
  } catch (error) {
    dispatch({ type: FAIL_DATA_REQUEST, payload: error });
    console.log(error);
  }
};
//取得單筆教職員資料
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

//設定作品分類選項為所有
export const setWorksSortActiveItem = async (dispatch) => {
  dispatch({
    type: SET_WORKSSORT_ACTIVEITEM,
    payload: '所有',
  });
};
//設定作品分類陣列內容
export const setWorksSort = async (dispatch, options) => {
  const { sort = '109', path = '/' } = options;
  dispatch({ type: BEGIN_DATA_REQUEST });
  try {
    //從後台取資料
    var url = '/';
    var worksSortArray = ['所有'];
    var response = {};
    var works = [];

    if (path === '/graduationWorks') {
      url = `${BASE_URL}/graduateProject`;
      response = await axios.get(url);
      works = response.data;
      works.map((work) => worksSortArray.push(work.sortTitle.toString()));
    } else if (path === '/courseWorks') {
      url = `${BASE_URL}/classProject`;
      response = await axios.get(url);
      works = response.data;
      works.map((work) => worksSortArray.push(work.sortTitle));
    }
    //從json取資料
    // const works = gwjson;
    dispatch({
      type: SET_WORKSSORT_ACTIVEITEM,
      payload: sort,
    }); //紀錄作品分類
    dispatch({
      type: SET_WORKS_SORT,
      payload: worksSortArray,
    }); //紀錄所有分類名稱
    dispatch({ type: SUCCESS_DATA_REQUEST });
  } catch (error) {
    dispatch({ type: FAIL_DATA_REQUEST, payload: error });
    console.log(error);
  }
};

//取得所有畢業專題作品資料
export const getGraduationWorks = async (dispatch) => {
  dispatch({ type: BEGIN_DATA_REQUEST });
  try {
    //從後台取資料
    const url = `${BASE_URL}/graduateProject`;
    const response = await axios.get(url);
    const works = response.data;
    var worksSortArray = ['所有'];
    works.map((work) => worksSortArray.push(work.sortTitle.toString()));
    //從json取資料
    // const works = gwjson;

    dispatch({
      type: SET_WORKSSORT_ACTIVEITEM,
      payload: '所有',
    }); //紀錄作品分類
    dispatch({
      type: SET_GRADUATONWORKS_SHOW,
      payload: works,
    }); //紀錄要顯示的作品
    dispatch({
      type: SET_WORKS_SORT,
      payload: worksSortArray,
    }); //紀錄所有分類名稱
    dispatch({ type: SUCCESS_DATA_REQUEST });
  } catch (error) {
    dispatch({ type: FAIL_DATA_REQUEST, payload: error });
    console.log(error);
  }
};
//取得指定分類畢業專題作品資料
export const getGraduationWorksShow = async (dispatch, options) => {
  const { sort = '109' } = options;
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
    }); //紀錄作品分類
    dispatch({
      type: SET_GRADUATONWORKS_SHOW,
      payload: works,
    }); //紀錄要顯示的作品
    dispatch({ type: SUCCESS_DATA_REQUEST });
  } catch (error) {
    dispatch({ type: FAIL_DATA_REQUEST, payload: error });
    console.log(error);
  }
};
//取得單筆畢業專題作品資料
export const getGraduationWorksDetail = async (dispatch, options) => {
  //從後台取資料
  const { workId = 0, sort = '109' } = options;
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
    dispatch({
      type: SET_WORKSSORT_ACTIVEITEM,
      payload: sort,
    });
    dispatch({ type: SUCCESS_DATA_REQUEST });
  } catch (error) {
    dispatch({ type: FAIL_DATA_REQUEST, payload: error });
  }
};

//取得所有課程作品資料
export const getCourseWorks = async (dispatch) => {
  dispatch({ type: BEGIN_DATA_REQUEST });
  try {
    //從後台取資料
    const url = `${BASE_URL}/classProject`;
    const response = await axios.get(url);
    const works = response.data;
    var worksSortArray = ['所有'];
    works.map((work) => worksSortArray.push(work.sortTitle));
    //從json取資料
    // const works = gwjson;

    dispatch({
      type: SET_WORKSSORT_ACTIVEITEM,
      payload: '所有',
    }); //紀錄作品分類
    dispatch({
      type: SET_COURSEWORKS_SHOW,
      payload: works,
    }); //紀錄要顯示的作品
    dispatch({
      type: SET_WORKS_SORT,
      payload: worksSortArray,
    }); //紀錄所有分類名稱
    dispatch({ type: SUCCESS_DATA_REQUEST });
  } catch (error) {
    dispatch({ type: FAIL_DATA_REQUEST, payload: error });
    console.log(error);
  }
};
//取得指定分類課程作品資料
export const getCourseWorksShow = async (dispatch, options) => {
  const { sort = '遊戲設計' } = options;
  dispatch({ type: BEGIN_DATA_REQUEST });
  try {
    //從後台取資料
    const url = `${BASE_URL}/classProject?classGroup=${sort}`;
    const response = await axios.get(url);
    const works = [response.data];
    //從json取資料
    // const works = gwjson;

    dispatch({
      type: SET_WORKSSORT_ACTIVEITEM,
      payload: sort,
    }); //紀錄作品分類
    dispatch({
      type: SET_COURSEWORKS_SHOW,
      payload: works,
    }); //紀錄要顯示的作品
    dispatch({ type: SUCCESS_DATA_REQUEST });
  } catch (error) {
    dispatch({ type: FAIL_DATA_REQUEST, payload: error });
    console.log(error);
  }
};
//取得單筆課程作品資料
export const getCourseWorksDetail = async (dispatch, options) => {
  //從後台取資料
  const { workId = 0, sort = '遊戲設計' } = options;
  //從json取資料
  // const { groupid = 0, teacherid2 = 0 } = options;

  dispatch({ type: BEGIN_DATA_REQUEST });
  try {
    //從後台取資料
    const url = `${BASE_URL}/classProject?postID=${workId}`;
    const response = await axios.get(url);
    const worksDetail = response.data;
    // //從json取資料
    //const worksDetail = gwjson[groupid2].list[teacherid2];

    dispatch({
      type: SET_COURSEWORKS_DETAIL,
      payload: worksDetail,
    });
    dispatch({
      type: SET_WORKSSORT_ACTIVEITEM,
      payload: sort,
    });
    dispatch({ type: SUCCESS_DATA_REQUEST });
  } catch (error) {
    dispatch({ type: FAIL_DATA_REQUEST, payload: error });
  }
};

//取得所有合作成果作品
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
//取得單筆合作成果作品
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

export const getHomeNews = async (dispatch) => {
  dispatch({ type: BEGIN_DATA_REQUEST });
  try {
    //從json取資料
    // const homeNews = newsjson;

    //從後台取資料
    const url = `${BASE_URL}/post/homePage`;
    const response = await axios.get(url);
    const homeNews = response.data;
    dispatch({
      type: SET_HOME_NEWS,
      payload: homeNews,
    });
    dispatch({ type: SUCCESS_DATA_REQUEST });
  } catch (error) {
    dispatch({ type: FAIL_DATA_REQUEST, payload: error });
    console.log(error);
  }
};
