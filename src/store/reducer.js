import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

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
  SET_FORM_DOWNLOAD,
  SET_RULES_DOWNLOAD,
  SET_CURRICULUM,
  SET_STRUCTURE,
  SET_ADMISSION,
} from './actionTypes';

export const StoreContext = createContext();

const initialState = {
  news: [],
  newDetail: {},
  staff: [],
  staffDetail: [],
  worksSort: ['所有'],
  worksSortActiveItem: '所有',
  graduationWorksShow: [],
  graduationWorksDetail: {},
  courseWorksShow: [],
  courseWorksDetail: {},
  goodWorksShow: [],
  goodWorksDetail: {},
  requestdata: {
    homeHasBanner: false,
    homeHasNews: false,
    loading: false,
    error: null,
  },
  banner: [],
  homeNews: [],
  formDownloadContent: [],
  ruleDownloadContent: [],
};

function reducer(state, action) {
  switch (action.type) {
    case SET_BANNER:
      return {
        ...state,
        banner: action.payload,
        requestdata: {
          ...state.requestdata,
          homeHasBanner: true,
        },
      };
    case SET_HOME_NEWS:
      return {
        ...state,
        homeNews: action.payload,
        requestdata: {
          ...state.requestdata,
          homeHasNews: true,
        },
      };
    case SET_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    case SET_NEW_DETAIL:
      return {
        ...state,
        newDetail: action.payload,
      };
    case SET_STAFF:
      return {
        ...state,
        staff: action.payload,
      };
    case SET_STAFF_DETAIL:
      return {
        ...state,
        staffDetail: action.payload,
      };
    case SET_WORKS_SORT:
      return {
        ...state,
        worksSort: action.payload,
      };
    case SET_WORKSSORT_ACTIVEITEM:
      return {
        ...state,
        worksSortActiveItem: action.payload,
      };
    case SET_GRADUATONWORKS_SHOW:
      return {
        ...state,
        graduationWorksShow: action.payload,
      };
    case SET_GRADUATONWORKS_DETAIL:
      return {
        ...state,
        graduationWorksDetail: action.payload,
      };
    case SET_COURSEWORKS_SHOW:
      return {
        ...state,
        courseWorksShow: action.payload,
      };
    case SET_COURSEWORKS_DETAIL:
      return {
        ...state,
        courseWorksDetail: action.payload,
      };
    case SET_GOODWORKS_SHOW:
      return {
        ...state,
        goodWorksShow: action.payload,
      };
    case SET_GOODWORKS_DETAIL:
      return {
        ...state,
        goodWorksDetail: action.payload,
      };
    case BEGIN_DATA_REQUEST:
      return {
        ...state,
        requestdata: { ...state.requestdata, loading: true },
      };
    case SUCCESS_DATA_REQUEST:
      return {
        ...state,
        requestdata: { ...state.requestdata, loading: false },
      };
    case FAIL_DATA_REQUEST:
      return {
        ...state,
        requestdata: {
          ...state.requestdata,
          loading: false,
          error: action.payload,
        },
      };
    case SET_FORM_DOWNLOAD:
      return {
        ...state,
        formDownloadContent: action.payload,
      };
    case SET_RULES_DOWNLOAD:
      return {
        ...state,
        ruleDownloadContent: action.payload,
      };
    case SET_CURRICULUM:
      return {
        ...state,
        curriculum: action.payload,
      };
    case SET_STRUCTURE:
      return {
        ...state,
        structure: action.payload,
      };
    case SET_ADMISSION:
      return {
        ...state,
        admission: action.payload,
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
}

StoreProvider.propTypes = {
  children: PropTypes.object,
};
