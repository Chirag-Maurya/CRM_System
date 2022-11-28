import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";

function Register() {
  const user = useSelector((state) => state.user);
  const { name } = user;

  const [CompanyCodeReg, setCompanyCodeReg] = useState("");
  const [UserIDReg, setUserIDReg] = useState("");
  const [UserFullNameReg, setUserFullNameReg] = useState("");
  const [UserDetailReg, setUserDetailReg] = useState("");
  const [LoginIDReg, setLoginIDReg] = useState("");
  const [PasswordReg, setPasswordReg] = useState("");
  const [ConfirmPasswordReg, setConfirmPasswordReg] = useState("");
  const [UserPinReg, setUserPinReg] = useState("");
  const [UserEmailIDReg, setUserEmailIDReg] = useState("");
  const [DateCreated, setDateCreated] = useState(
    dayjs(Date(Date.now()).toString()).format("YYYY-MM-DD HH:mm:ss")
  );
  const [CreatedBy, setCreatedBy] = useState(name);

  const register = (event) => {
    axios
      .post("http://localhost:8000/register", {
        CompanyCode: CompanyCodeReg,
        UserID: UserIDReg,
        UserFullName: UserFullNameReg,
        UserDetail: UserDetailReg,
        LoginID: LoginIDReg,
        Password: PasswordReg,
        ConfirmPassword: ConfirmPasswordReg,
        UserPin: UserPinReg,
        UserEmailID: UserEmailIDReg,
        DateCreated: DateCreated,
        CreatedBy: CreatedBy,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Sign Up</h3>

            <div className="form-class5">
              <div className="form-group">
                <label>Company Code</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="CompanyCode"
                  onChange={(e) => {
                    setCompanyCodeReg(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label>User ID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="UserID"
                  onChange={(e) => {
                    setUserIDReg(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label>User Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="UserFullName"
                  onChange={(e) => {
                    setUserFullNameReg(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label>User Detail</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="UserDetail"
                  onChange={(e) => {
                    setUserDetailReg(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label>Login ID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="LoginID"
                  onChange={(e) => {
                    setLoginIDReg(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => {
                    setPasswordReg(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder=" ConfirmPassword"
                  onChange={(e) => {
                    setConfirmPasswordReg(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label>User Pin</label>
                <input
                  type="Text"
                  className="form-control"
                  placeholder="UserPin"
                  onChange={(e) => {
                    setUserPinReg(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label>UserEmailID</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="UserEmailID"
                  onChange={(e) => {
                    setUserEmailIDReg(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label>Date Created</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Date Created"
                  name="DateCreated"
                  value={dayjs(DateCreated).format("YYYY-MM-DD")}
                />
              </div>
              <div className="form-group">
                <label>Created By</label>
                <input
                  type="Text"
                  className="form-control"
                  placeholder="Created By"
                  value={CreatedBy}
                />
              </div>
            </div>

            <button className="btn btn-primary btn-block" onClick={register}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Register);
