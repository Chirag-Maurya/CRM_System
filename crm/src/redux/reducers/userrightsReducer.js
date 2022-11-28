import { ActionTypes } from "../constants/action-type";

const initialState = {
  rightsName: "",
  rightsField: "",
  rightsValue: "",
};

export const userrightsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.RIGHTS:
      return {
        ...state,
        rightsName: payload.RIGHTS_NAME,
        rightsField: payload.RIGHTS_FIELD,
        rightsValue: payload.RIGHTS_VALUE,
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        rightsName: "",
        rightsField: "",
        rightsValue: "",
      };
    default:
      return state;
  }
};
