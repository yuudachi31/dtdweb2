import constants from './actionTypes';
import Cookie from 'js-cookie';

export const clickHamburgerMenu = (uiDispatch) => {
  uiDispatch({ type: constants.CLICK_HAMBURGER_MENU });
};

export const clickHamburgerTitle = (uiDispatch, options) => {
  const { clickTitle } = options;
  uiDispatch({ type: constants.CLICK_HAMBURGER_TITLE, payload: clickTitle });
};

export const clickHamburgerLink = (uiDispatch) => {
  uiDispatch({ type: constants.CLICK_HAMBURGER_LINK });
};

export const setPageNumberState = (uiDispatch, options) => {
  const { pageCount } = options;
  uiDispatch({ type: constants.SET_PAGENUMBER_STATE, payload: pageCount });
};

export const clickPageNumber = (uiDispatch, options) => {
  const { clickNumber = 1 } = options;
  uiDispatch({ type: constants.CLICK_PAGENUMBER, payload: clickNumber });
};

export const setLoadState = (uiDispatch, options) => {
  const { loadState } = options;
  uiDispatch({ type: constants.SET_NEWSLOAD_STATE, payload: loadState });
};

export const setPageContent = (uiDispatch, activitiesCategory) => {
  uiDispatch({
    type: constants.SET_PAGE_CONTENT,
    payload: activitiesCategory,
  });
  Cookie.set('activitiesCategory', JSON.stringify(activitiesCategory));
};

export const setActiveNavItem = (uiDispatch, activeItem) => {
  uiDispatch({
    type: constants.SET_NAVBAR_ACTIVEITEM,
    payload: activeItem,
  });
  Cookie.set('activeItem', activeItem);
};
