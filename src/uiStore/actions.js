import constants from './actionTypes';

export const clickHamburgerMenu = (dispatch) => {
  dispatch({ type: constants.CLICK_HAMBURGERMENU });
};

export const clickHamburgerTitle = (dispatch, options) => {
  const { clickTitle } = options;
  dispatch({ type: constants.CLICK_HAMBURGERTITLE, payload: clickTitle });
};

export const clickHamburgerLink = (dispatch) => {
  dispatch({ type: constants.CLICK_HAMBURGERLINK });
};
