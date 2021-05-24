import constants from './actionTypes';
import Cookie from 'js-cookie';

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

export const setPageNumberState = (dispatch, options) => {
  const { pageCount } = options;
  dispatch({ type: constants.SET_PAGENUMBERSTATE, payload: pageCount });
};

export const clickPageNumber = (dispatch, options) => {
  const { clickNumber } = options;
  dispatch({ type: constants.CLICK_PAGENUMBER, payload: clickNumber });
};

export const clickPageChevron = (dispatch, options) => {
  const { clickChevron } = options;
  dispatch({ type: constants.CLICK_PAGECHEVRON, payload: clickChevron });
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
