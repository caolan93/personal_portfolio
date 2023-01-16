import { TOGGLE_MOBILE_MENU } from "./types";

export const toggleMobileMenu = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: TOGGLE_MOBILE_MENU,
      payload: data,
    });
    resolve(data);
  });
};
