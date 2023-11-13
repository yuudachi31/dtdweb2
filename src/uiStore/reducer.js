import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import constants from './actionTypes';
import activitiesCategory from '../assets/json/DTDActivities.json';

export const UIStoreContext = createContext();

const initialState = {
  hamburgerMenuState: false,
  hamburgerTitleState: [false, false, false, false, false, false],
  pageNumberState: [],
  newsLoadState: true,
  activitiesPage: {
    activitiesCategory,
  },
  activitiesNavBar: {
    activeItem: '/activities',
  },
};
const reducer = (uiState, action) => {
  switch (action.type) {
    case constants.CLICK_HAMBURGER_MENU: {
      return {
        ...uiState,
        hamburgerMenuState: !uiState.hamburgerMenuState,
        hamburgerTitleState: [false, false, false, false, false, false],
      };
    }
    case constants.CLICK_HAMBURGER_TITLE: {
      const hamburgerTitleStateArr = [];
      for (let i = 0; i < 6; i++) {
        if (i == action.payload) {
          hamburgerTitleStateArr.push(!uiState.hamburgerTitleState[i]);
        } else {
          hamburgerTitleStateArr.push(false);
        }
      }
      return {
        ...uiState,
        hamburgerTitleState: hamburgerTitleStateArr,
      };
    }
    case constants.CLICK_HAMBURGER_LINK: {
      return {
        ...uiState,
        hamburgerMenuState: false,
        hamburgerTitleState: [false, false, false, false, false, false],
      };
    }

    case constants.SET_PAGENUMBER_STATE: {
      const pageNumberStateArr = [];
      for (let i = 1; i <= action.payload; i++) {
        pageNumberStateArr.push(false);
      }
      return {
        ...uiState,
        pageNumberState: pageNumberStateArr,
      };
    }

    case constants.CLICK_PAGENUMBER: {
      const pageNumberStateArr = [];
      for (let i = 1; i <= uiState.pageNumberState.length; i++) {
        if (i == action.payload) {
          pageNumberStateArr.push(true);
        } else {
          pageNumberStateArr.push(false);
        }
      }
      return {
        ...uiState,
        pageNumberState: pageNumberStateArr,
      };
    }

    case constants.SET_NEWSLOAD_STATE: {
      return {
        ...uiState,
        newsLoadState: action.payload,
      };
    }

    case constants.SET_PAGE_CONTENT:
      return {
        ...uiState,
        activitiesPage: {
          activitiesCategory: action.payload,
        },
      };
    case constants.SET_NAVBAR_ACTIVEITEM:
      return {
        ...uiState,
        activitiesNavBar: {
          activeItem: action.payload,
        },
      };
    default:
      return uiState;
  }
};

export function UIStoreProvider(props) {
  const [uiState, uiDispatch] = useReducer(reducer, initialState);
  const value = { uiState, uiDispatch };

  return (
    <UIStoreContext.Provider value={value}>
      {props.children}
    </UIStoreContext.Provider>
  );
}

UIStoreProvider.propTypes = {
  children: PropTypes.object,
};

// export { initialAppState, appReducer };
