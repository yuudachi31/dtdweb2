import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import constants from './actionTypes';
import activitiesCategory from '../assets/json/DTDActivities.json';

export const UIStoreContext = createContext();

const initialState = {
  hamburgerMenu: false,
  hamburgerTitle: [false, false, false, false, false],
  pageNumberState: [],
  pageSeletedNumber: 1,
  activitiesPage: {
    activitiesCategory,
  },
  activitiesNavBar: {
    activeItem: '/activities',
  },
};
const reducer = (state, action) => {
  switch (action.type) {
    case constants.CLICK_HAMBURGERMENU: {
      const hamburgerMenuState = !state.hamburgerMenu;
      return {
        ...state,
        hamburgerMenu: hamburgerMenuState,
        hamburgerTitle: [false, false, false, false, false],
      };
    }
    case constants.CLICK_HAMBURGERTITLE: {
      const hamburgerTitleState = [];
      for (let i = 0; i < 5; i++) {
        if (i == action.payload) {
          hamburgerTitleState.push(!state.hamburgerTitle[i]);
        } else {
          hamburgerTitleState.push(false);
        }
      }
      return {
        ...state,
        hamburgerTitle: hamburgerTitleState,
      };
    }
    case constants.CLICK_HAMBURGERLINK: {
      return {
        ...state,
        hamburgerMenu: false,
        hamburgerTitle: [false, false, false, false, false],
      };
    }

    case constants.SET_PAGENUMBERSTATE: {
      const pageNumberStateArr = [];
      for (let i = 1; i <= action.payload; i++) {
        if (i == 1) {
          pageNumberStateArr.push(true);
        } else {
          pageNumberStateArr.push(false);
        }
      }
      return {
        ...state,
        pageNumberState: pageNumberStateArr,
        pageSeletedNumber: 1,
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
        pageSeletedNumber: action.payload,
      };
    }

    case constants.CLICK_PAGECHEVRON: {
      const pageNumberStateArr = [];
      var selectedNumber = 1;
      for (let i = 1; i <= state.pageNumberState.length; i++) {
        if (state.pageNumberState[i - 1] == true) {
          selectedNumber = i + action.payload;
        }
      }
      for (let i = 1; i <= state.pageNumberState.length; i++) {
        if (i == selectedNumber) {
          pageNumberStateArr.push(true);
        } else {
          pageNumberStateArr.push(false);
        }
      }
      return {
        ...state,
        pageNumberState: pageNumberStateArr,
        pageSeletedNumber: selectedNumber,
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
