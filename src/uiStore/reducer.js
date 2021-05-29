import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import constants from './actionTypes';
import activitiesCategory from '../assets/json/DTDActivities.json';

export const UIStoreContext = createContext();

const initialState = {
  hamburgerMenuState: false,
  hamburgerTitleState: [false, false, false, false, false],
  pageNumberState: [],
  activitiesPage: {
    activitiesCategory,
  },
  activitiesNavBar: {
    activeItem: '/activities',
  },
};
const reducer = (state, action) => {
  switch (action.type) {
    case constants.CLICK_HAMBURGER_MENU: {
      return {
        ...state,
        hamburgerMenuState: !state.hamburgerMenuState,
        hamburgerTitleState: [false, false, false, false, false],
      };
    }
    case constants.CLICK_HAMBURGER_TITLE: {
      const hamburgerTitleStateArr = [];
      for (let i = 0; i < 5; i++) {
        if (i == action.payload) {
          hamburgerTitleStateArr.push(!state.hamburgerTitleState[i]);
        } else {
          hamburgerTitleStateArr.push(false);
        }
      }
      return {
        ...state,
        hamburgerTitleState: hamburgerTitleStateArr,
      };
    }
    case constants.CLICK_HAMBURGER_LINK: {
      return {
        ...state,
        hamburgerMenuState: false,
        hamburgerTitleState: [false, false, false, false, false],
      };
    }

    case constants.SET_PAGENUMBER_STATE: {
      const pageNumberStateArr = [];
      for (let i = 1; i <= action.payload; i++) {
        pageNumberStateArr.push(false);
      }
      return {
        ...state,
        pageNumberState: pageNumberStateArr,
      };
    }

    case constants.CLICK_PAGENUMBER: {
      const pageNumberStateArr = [];
      for (let i = 1; i <= state.pageNumberState.length; i++) {
        if (i == action.payload) {
          pageNumberStateArr.push(true);
        } else {
          pageNumberStateArr.push(false);
        }
      }
      return {
        ...state,
        pageNumberState: pageNumberStateArr,
      };
    }

    case constants.SET_PAGE_CONTENT:
      return {
        ...state,
        activitiesPage: {
          activitiesCategory: action.payload,
        },
      };
    case constants.SET_NAVBAR_ACTIVEITEM:
      return {
        ...state,
        activitiesNavBar: {
          activeItem: action.payload,
        },
      };
    default:
      return state;
  }
};

export function UIStoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

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
