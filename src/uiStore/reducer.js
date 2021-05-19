import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import constants from './actionTypes';

export const UIStoreContext = createContext();

const initialState = {
  hamburgerMenu: false,
  hamburgerTitle: [false, false, false, false, false],
  pageNumber: [],
  pageSeletedNumber: 1,
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
      const pageNumberState = [];
      for (let i = 0; i < action.payload; i++) {
        if (i == 0) {
          pageNumberState.push(true);
        } else {
          pageNumberState.push(false);
        }
      }
      return {
        ...state,
        pageNumber: pageNumberState,
        pageSeletedNumber: 1,
      };
    }

    case constants.CLICK_PAGENUMBER: {
      const pageNumberState = [];
      for (let i = 0; i < state.pageNumber.length; i++) {
        if (i == action.payload) {
          pageNumberState.push(true);
        } else {
          pageNumberState.push(false);
        }
      }
      return {
        ...state,
        pageNumber: pageNumberState,
        pageSeletedNumber: action.payload + 1,
      };
    }

    case constants.CLICK_PAGECHEVRON: {
      const pageNumberState = [];
      var selectedNumber = 0;
      for (let i = 0; i < state.pageNumber.length; i++) {
        if (state.pageNumber[i] == true) {
          selectedNumber = i + action.payload;
        }
      }
      for (let i = 0; i < state.pageNumber.length; i++) {
        if (i == selectedNumber) {
          pageNumberState.push(true);
        } else {
          pageNumberState.push(false);
        }
      }
      return {
        ...state,
        pageNumber: pageNumberState,
        pageSeletedNumber: selectedNumber + 1,
      };
    }
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
