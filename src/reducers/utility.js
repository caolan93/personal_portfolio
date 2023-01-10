import { TOGGLE_MOBILE_MENU } from "../actions/types";

const initialState = {
  mobileMenu: false,
};

const mobileMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MOBILE_MENU:
      return {
        ...state,
        mobileMenu: action.payload,
      };

    default:
      return state;
  }
};

export default mobileMenuReducer;
