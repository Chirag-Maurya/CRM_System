import { ActionTypes } from "../constants/action-type";

const initialState = {
  name: "",
  id: 0,
  loginId: "",
  companyCode: "",
  userDetails: "",
  email: "",
  dateCreated: "",
  createdBy: "",
  locationId: "",
  photo: "",
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        name: payload.UserFullName,
        id: payload.UserID,
        loginId: payload.LoginID,
        companyCode: payload.CmpnyCode,
        userDetails: payload.UserDetail,
        email: payload.UserEmailID,
        dateCreated: payload.DateCreated,
        createdBy: payload.CreatedBy,
        locationId: payload.LocationID,
        photo: payload.Photo,
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        name: "",
        id: 0,
        loginId: "",
        companyCode: "",
        userDetails: "",
        email: "",
        dateCreated: "",
        createdBy: "",
        locationId: "",
        photo: "",
      };
    default:
      return state;
  }
};
