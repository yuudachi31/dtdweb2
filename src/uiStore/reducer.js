import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import constants from './actionTypes';

export const UIStoreContext = createContext();

const initialState = {
  hamburgerMenu: false,
  hamburgerTitle: [false, false, false, false, false],
};
const reducer = (state, action) => {
  switch (action.type) {
    case constants.CLICK_HAMBURGERMENU: {
      const hamburgerMenuState = !state.hamburgerMenu;
      return {
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
        hamburgerMenu: false,
        hamburgerTitle: [false, false, false, false, false],
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
