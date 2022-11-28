import React from "react";
import default_user from "../default_user.png";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Profile() {
  const user = useSelector((state) => state.user);
  const userrights = useSelector((state) => state.userrights);

  const {
    name,
    id,
    loginId,
    companyCode,
    userDetails,
    email,
    dateCreated,
    locationId,
    createdBy,
    photo,
  } = user;
  const { rightsName, rightsField, rightsValue } = userrights;
  const history = useHistory();

  const handleEdit = () => {
    history.push("/upusermaster/" + id);
  };

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <div className="container emp-profile">
            <form method="">
              <div className="row">
                <div className="col-md-4">
                  {photo ? (
                    <img
                      src={"http://localhost:8000/uploads/" + photo}
                      alt="Profile Pic"
                      className="profile-image col-md-8"
                    />
                  ) : (
                    <img
                      src={default_user}
                      alt="Profile Pic"
                      className="profile-image col-md-8"
                    />
                  )}
                </div>
                <div className="col-md-5">
                  <div classname="profile-head">
                    <h6>
                      {id} - {name}
                    </h6>
                    <h6>Login ID: {loginId}</h6>
                    <h6>Company Code: {companyCode}</h6>
                    <h6>Details: {userDetails}</h6>
                    <h6>Email: {email}</h6>
                    <h6>Date Created: {dateCreated}</h6>
                    <h6>Created By: {createdBy}</h6>
                    <h6>Location ID: {locationId}</h6>
                  </div>
                </div>
                <div className="col-md-2">
                  <button onClick={() => handleEdit()}>Edit Profile</button>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-4">
                    <div>Rights Name: {rightsName}</div>
                    <div>Rights Field: {rightsField}</div>
                    <div>Rights Value: {rightsValue}</div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
