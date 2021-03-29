import constants from './actionTypes';

const initialAppState = {
  hamburgerMenu: false,
  hamburgerTitle: {
    title_1: false,
    title_2: false,
    title_3: false,
    title_4: false,
    title_5: false,
  },
};
const appReducer = (state, action) => {
  switch (action.type) {
    case constants.CLICK_HAMBURGERMENU: {
      const hamburgerMenuState = !state.hamburgerMenu;
      return {
        hamburgerMenu: hamburgerMenuState,
        hamburgerTitle: {
          title_1: false,
          title_2: false,
          title_3: false,
          title_4: false,
          title_5: false,
        },
      };
    }
    case constants.CLICK_HAMBURGERTITLE_1: {
      const hamburgerTitleState = !state.hamburgerTitle.title_1;
      return {
        ...state,
        hamburgerTitle: {
          title_1: hamburgerTitleState,
          title_2: false,
          title_3: false,
          title_4: false,
          title_5: false,
        },
      };
    }
    case constants.CLICK_HAMBURGERTITLE_2: {
      const hamburgerTitleState = !state.hamburgerTitle.title_2;
      return {
        ...state,
        hamburgerTitle: {
          title_1: false,
          title_2: hamburgerTitleState,
          title_3: false,
          title_4: false,
          title_5: false,
        },
      };
    }
    case constants.CLICK_HAMBURGERTITLE_3: {
      const hamburgerTitleState = !state.hamburgerTitle.title_3;
      return {
        ...state,
        hamburgerTitle: {
          title_1: false,
          title_2: false,
          title_3: hamburgerTitleState,
          title_4: false,
          title_5: false,
        },
      };
    }
    case constants.CLICK_HAMBURGERTITLE_4: {
      const hamburgerTitleState = !state.hamburgerTitle.title_4;
      return {
        ...state,
        hamburgerTitle: {
          title_1: false,
          title_2: false,
          title_3: false,
          title_4: hamburgerTitleState,
          title_5: false,
        },
      };
    }
    case constants.CLICK_HAMBURGERTITLE_5: {
      const hamburgerTitleState = !state.hamburgerTitle.title_5;
      return {
        ...state,
        hamburgerTitle: {
          title_1: false,
          title_2: false,
          title_3: false,
          title_4: false,
          title_5: hamburgerTitleState,
        },
      };
    }
    case constants.CLICK_HAMBURGERLINK: {
      return {
        hamburgerMenu: false,
        hamburgerTitle: {
          title_1: false,
          title_2: false,
          title_3: false,
          title_4: false,
          title_5: false,
        },
      };
    }
  }
};

export { initialAppState, appReducer };
