import constants from './actionTypes';
import Cookie from 'js-cookie';

export const clickHamburgerMenu = (dispatch) => {
  dispatch({ type: constants.CLICK_HAMBURGER_MENU });
};

export const clickHamburgerTitle = (dispatch, options) => {
  const { clickTitle } = options;
  dispatch({ type: constants.CLICK_HAMBURGER_TITLE, payload: clickTitle });
};

export const clickHamburgerLink = (dispatch) => {
  dispatch({ type: constants.CLICK_HAMBURGER_LINK });
};

export const setPageNumberState = (dispatch, options) => {
  const { pageCount } = options;
  dispatch({ type: constants.SET_PAGENUMBER_STATE, payload: pageCount });
};

export const clickPageNumber = (dispatch, options) => {
  const { clickNumber = 1 } = options;
  dispatch({ type: constants.CLICK_PAGENUMBER, payload: clickNumber });
};

export const setPageContent = (dispatch, activitiesCategory) => {
  dispatch({
    type: constants.SET_PAGE_CONTENT,
    payload: activitiesCategory,
  });
  Cookie.set('activitiesCategory', JSON.stringify(activitiesCategory));
};

export const setActiveNavItem = (dispatch, activeItem) => {
  dispatch({
    type: constants.SET_NAVBAR_ACTIVEITEM,
    payload: activeItem,
  });
  Cookie.set('activeItem', activeItem);
};
