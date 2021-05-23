import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import {
  SET_NEWS,
  SET_NEWS_DETAIL,
  SET_HONOR_DETAIL,
  SET_HONORS,
  SET_STAFF,
  SET_STAFF_DETAIL,
  SET_GRADUATONWORKS,
  SET_GRADUATONWORKS_SORT,
  SET_GRADUATONWORKS_DETAIL,
  SET_COOPERATIONWORKS,
  SET_COOPERATIONWORKS_DETAIL,
  BEGIN_DATA_REQUEST,
  SUCCESS_DATA_REQUEST,
  FAIL_DATA_REQUEST,
} from './actionTypes';

export const StoreContext = createContext();

const initialState = {
  news: [],
  newsDetail: {},
  honors: [],
  honorDetail: {},
  staff: [],
  staffDetail: {},
  graduationWorks: [],
  graduationWorksSort: [],
  graduationWorksDetail: {},
  cooperationWorks: [],
  cooperationWorksDetail: {},
  requestdata: { loading: false, error: null },
};

function reducer(state, action) {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    case SET_NEWS_DETAIL:
      return {
        ...state,
        newsDetail: action.payload,
      };
    case SET_HONORS:
      return {
        ...state,
        honors: action.payload,
      };
    case SET_HONOR_DETAIL:
      return {
        ...state,
        honorDetail: action.payload,
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
    case SET_GRADUATONWORKS:
      return {
        ...state,
        graduationWorks: action.payload,
      };
    case SET_GRADUATONWORKS_SORT:
      return {
        ...state,
        graduationWorksSort: action.payload,
      };
    case SET_GRADUATONWORKS_DETAIL:
      return {
        ...state,
        graduationWorksDetail: action.payload,
      };
    case SET_COOPERATIONWORKS:
      return {
        ...state,
        cooperationWorks: action.payload,
      };
    case SET_COOPERATIONWORKS_DETAIL:
      return {
        ...state,
        cooperationWorksDetail: action.payload,
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
