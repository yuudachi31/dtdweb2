import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import {
  SET_NEWS,
  SET_NEWS_DETAIL,
  SET_HONOR_DETAIL,
  SET_HONORS,
  SET_STAFF,
  SET_STAFF_DETAIL,
} from './actionTypes';

export const StoreContext = createContext();

const initialState = {
  news: [],
  newsDetail: {},
  honors: [],
  honorDetail: {},
  staff: [],
  staffDetail: {},
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
