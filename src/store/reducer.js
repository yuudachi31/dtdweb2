import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import {
  SET_NEWS,
  SET_STAFF,
  SET_STAFF_DETAIL,
  BEGIN_DATA_REQUEST,
  SUCCESS_DATA_REQUEST,
  FAIL_DATA_REQUEST,
  SET_BANNER,
} from './actionTypes';

export const StoreContext = createContext();

const initialState = {
  news: [],
  staff: [],
  staffDetail: {},
  requestdata: { loading: false, error: null },
  banner: [],
};

function reducer(state, action) {
  switch (action.type) {
    case SET_BANNER:
      return {
        ...state,
        banner: action.payload,
      };
    case SET_NEWS:
      return {
        ...state,
        news: action.payload,
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
