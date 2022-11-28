import { ActionTypes } from "../constants/action-type";

export const loginUser = (user) => {
  return {
    type: ActionTypes.LOGIN,
    payload: user,
  };
};

export const logoutUser = () => {
  return {
    type: ActionTypes.LOGOUT,
    payload: null,
  };
};

export const userrights = (userrights) => {
  return {
    type: ActionTypes.RIGHTS,
    payload: userrights,
  };
};
