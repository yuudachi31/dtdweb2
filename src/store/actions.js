import axios from 'axios';

import {
  SET_NEWS,
  SET_NEW_DETAIL,
  SET_STAFF,
  SET_STAFF_DETAIL,
  SET_WORKS_SORT,
  SET_WORKSSORT_ACTIVEITEM,
  SET_GRADUATONWORKS_SHOW,
  SET_GRADUATONWORKS_DETAIL,
  SET_COURSEWORKS_SHOW,
  SET_COURSEWORKS_DETAIL,
  SET_GOODWORKS_SHOW,
  SET_GOODWORKS_DETAIL,
  BEGIN_DATA_REQUEST,
  SUCCESS_DATA_REQUEST,
  FAIL_DATA_REQUEST,
  SET_BANNER,
  SET_HOME_NEWS,
} from './actionTypes';

const BASE_URL = 'http://dtd.ntue.edu.tw:8080/wp-json/dtd/v1';

export const getNews = async (dispatch, options) => {
  dispatch({ type: BEGIN_DATA_REQUEST });
  const { clickNumber = '1', pageStyle } = options;

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

export const getNewDetail = async (dispatch, options) => {
  dispatch({ type: BEGIN_DATA_REQUEST });
  const { newID } = options;

  try {
    const url = `${BASE_URL}/post?postID=${newID}`;
    const response = await axios.get(url);
    const newDetail = response.data;

    dispatch({
      type: SET_NEW_DETAIL,
      payload: newDetail,
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
    const url = `${BASE_URL}/staff`;
    const response = await axios.get(url);
    const staff = response.data;

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
  const { staffpath = '范丙林' } = options;

  dispatch({ type: BEGIN_DATA_REQUEST });
  try {
    const url = `${BASE_URL}/staff?term=${staffpath}`;
    const response = await axios.get(url);
    const staffDetail = response.data;

    dispatch({
      type: SET_STAFF_DETAIL,
      payload: staffDetail,
    });
    dispatch({ type: SUCCESS_DATA_REQUEST });
  } catch (error) {
    dispatch({ type: FAIL_DATA_REQUEST, payload: error });
  }
};

//設定作品分類陣列內容
export const setWorksSort = async (dispatch, options) => {
  const { sort = '109', path = '/' } = options;

  dispatch({ type: BEGIN_DATA_REQUEST });
  try {
    var url = '/';
    var worksSortArray = [];
    var response = {};
    var works = [];

    if (path === '/graduationWorks') {
      url = `${BASE_URL}/graduateProject`;
      response = await axios.get(url);
      works = response.data;
      works.map((work) => worksSortArray.push(work.sortTitle.toString()));
    } else if (path === '/courseWorks') {
      worksSortArray[0] = '所有';
      url = `${BASE_URL}/classProject`;
      response = await axios.get(url);
      works = response.data;
      works.map((work) => worksSortArray.push(work.sortTitle));
    } else if (path === '/goodWorks') {
      worksSortArray[0] = '所有';
      url = `${BASE_URL}/excellentProject`;
      response = await axios.get(url);
      works = response.data;
      works.map((work) => worksSortArray.push(work.sortTitle));
    } else if (path === '/') {
      dispatch({
        type: SET_GRADUATONWORKS_SHOW,
        payload: [],
      }); //清掉畫面
      dispatch({
        type: SET_COURSEWORKS_SHOW,
        payload: [],
      }); //清掉畫面
      dispatch({
        type: SET_GOODWORKS_SHOW,
        payload: [],
      }); //清掉畫面
    }

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

//取得所有畢業專題作品資料與設定初始顯示為最新一屆作品
export const getGraduationWorks = async (dispatch) => {
  dispatch({ type: BEGIN_DATA_REQUEST });
  try {
    const url = `${BASE_URL}/graduateProject`;
    const response = await axios.get(url);
    const works = response.data;
    var worksSortArray = [];
    works.map((work) => worksSortArray.push(work.sortTitle.toString()));

    dispatch({
      type: SET_WORKSSORT_ACTIVEITEM,
      payload: works[0].sortTitle,
    }); //紀錄作品分類為最新一屆
    dispatch({
      type: SET_GRADUATONWORKS_SHOW,
      payload: [works[0]],
    }); //紀錄要顯示的作品為最新一屆（顯示作品統一格式為陣列）
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
    const url = `${BASE_URL}/graduateProject?graduateYear=${sort}`;
    const response = await axios.get(url);
    const works = response.data;

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
  const { workId = 0, sort = '109' } = options;

  dispatch({ type: BEGIN_DATA_REQUEST });
  try {
    const url = `${BASE_URL}/graduateProject?postID=${workId}`;
    const response = await axios.get(url);
    const worksDetail = response.data;

    dispatch({
      type: SET_GRADUATONWORKS_DETAIL,
      payload: worksDetail,
    });
    dispatch({
      type: SET_WORKSSORT_ACTIVEITEM,
      payload: sort,
    }); //紀錄作品分類
    dispatch({ type: SUCCESS_DATA_REQUEST });
  } catch (error) {
    dispatch({ type: FAIL_DATA_REQUEST, payload: error });
  }
};

//取得所有課程作品資料
export const getCourseWorks = async (dispatch) => {
  dispatch({ type: BEGIN_DATA_REQUEST });
  try {
    const url = `${BASE_URL}/classProject`;
    const response = await axios.get(url);
    const works = response.data;
    var worksSortArray = ['所有'];
    works.map((work) => worksSortArray.push(work.sortTitle));

    dispatch({
      type: SET_WORKSSORT_ACTIVEITEM,
      payload: '所有',
    }); //紀錄作品分類為所有
    dispatch({
      type: SET_COURSEWORKS_SHOW,
      payload: works,
    }); //紀錄要顯示的作品為全部作品
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
    const url = `${BASE_URL}/classProject?workType=${sort}`;
    const response = await axios.get(url);
    const works = response.data;

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
  const { workId = 0, sort = '遊戲設計' } = options;

  dispatch({ type: BEGIN_DATA_REQUEST });
  try {
    const url = `${BASE_URL}/classProject?postID=${workId}`;
    const response = await axios.get(url);
    const worksDetail = response.data;

    dispatch({
      type: SET_COURSEWORKS_DETAIL,
      payload: worksDetail,
    });
    dispatch({
      type: SET_WORKSSORT_ACTIVEITEM,
      payload: sort,
    }); //紀錄作品分類
    dispatch({ type: SUCCESS_DATA_REQUEST });
  } catch (error) {
    dispatch({ type: FAIL_DATA_REQUEST, payload: error });
  }
};

//取得所有優良成果作品資料
export const getGoodWorks = async (dispatch) => {
  dispatch({ type: BEGIN_DATA_REQUEST });
  try {
    const url = `${BASE_URL}/excellentProject`;
    const response = await axios.get(url);
    const works = response.data;
    var worksSortArray = ['所有'];
    works.map((work) => worksSortArray.push(work.sortTitle));

    dispatch({
      type: SET_WORKSSORT_ACTIVEITEM,
      payload: '所有',
    }); //紀錄作品分類為所有
    dispatch({
      type: SET_GOODWORKS_SHOW,
      payload: works,
    }); //紀錄要顯示的作品為全部作品
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
//取得指定分類研究成果資料
export const getGoodWorksShow = async (dispatch, options) => {
  const { sort = '遊戲設計' } = options;
  dispatch({ type: BEGIN_DATA_REQUEST });
  try {
    const url = `${BASE_URL}/excellentProject?workType=${sort}`;
    const response = await axios.get(url);
    const works = response.data;

    dispatch({
      type: SET_WORKSSORT_ACTIVEITEM,
      payload: sort,
    }); //紀錄作品分類
    dispatch({
      type: SET_GOODWORKS_SHOW,
      payload: works,
    }); //紀錄要顯示的作品
    dispatch({ type: SUCCESS_DATA_REQUEST });
  } catch (error) {
    dispatch({ type: FAIL_DATA_REQUEST, payload: error });
    console.log(error);
  }
};
//取得單筆研究成果資料
export const getGoodWorksDetail = async (dispatch, options) => {
  const { workId = 0, sort = '遊戲設計' } = options;

  dispatch({ type: BEGIN_DATA_REQUEST });
  try {
    const url = `${BASE_URL}/excellentProject?postID=${workId}`;
    const response = await axios.get(url);
    const worksDetail = response.data;

    dispatch({
      type: SET_GOODWORKS_DETAIL,
      payload: worksDetail,
    });
    dispatch({
      type: SET_WORKSSORT_ACTIVEITEM,
      payload: sort,
    }); //紀錄作品分類
    dispatch({ type: SUCCESS_DATA_REQUEST });
  } catch (error) {
    dispatch({ type: FAIL_DATA_REQUEST, payload: error });
  }
};

export const getHomeData = async (dispatch, homeHasBanner, homeHasNews) => {
  dispatch({ type: BEGIN_DATA_REQUEST });
  try {
    //從後台取資料
    const bannerUrl = `${BASE_URL}/banner`;
    const newsUrl = `${BASE_URL}/post/homePage`;
    const bannerResponse = await axios.get(bannerUrl);
    const newsResponse = await axios.get(newsUrl);
    const banner = bannerResponse.data;
    const homeNews = newsResponse.data;
    if (!homeHasBanner && !homeHasNews) {
      dispatch({
        type: SET_BANNER,
        payload: banner,
      });
      dispatch({
        type: SET_HOME_NEWS,
        payload: homeNews,
      });
      dispatch({ type: SUCCESS_DATA_REQUEST });
    }
  } catch (error) {
    dispatch({ type: FAIL_DATA_REQUEST, payload: error });
  }
};
