//import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser, userrights } from "../redux/actions/userAction";
import { useSelector } from "react-redux";

function Login() {
  const [LoginID, setLoginID] = useState("");
  const [Password, setPassword] = useState("");
  const [LoginStatus, setLoginStatus] = useState("");
  const user = useSelector((state) => state.user);
  const { id } = user;

  axios.defaults.withCredentials = true;
  const dispatch = useDispatch();

  const url1 = "http://localhost:8000/login";
  const url2 = "http://localhost:8000/profileuserrights/" + id;

  const login = async (event) => {
    await axios
      .post("http://localhost:8000/login", {
        LoginID: LoginID,
        Password: Password,
      })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
          console.log(LoginStatus);
        } else {
          dispatch(loginUser(response.data.result[0]));
        }
      });
  };

  useEffect(() => {
    const request1 = axios.get(url1);
    const request2 = axios.get(url2);
    axios
      .all([request1, request2])
      .then(
        axios.spread((...responses) => {
          const response1 = responses[0];
          const response2 = responses[1];
          if (response1.data.loggedIn === true) {
            setLoginStatus(response1.data.user[0].UserFullName);
          }
          dispatch(userrights(response2.data[0]));
        })
      )
      .catch((errors) => {
        console.log(errors);
      });
  }, [url1, url2, dispatch]);

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Log In</h3>

            <div className="form-group ">
              <label>Login ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="Login ID"
                onChange={(e) => {
                  setLoginID(e.target.value);
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
                  setPassword(e.target.value);
                }}
              />
            </div>

            <button className="btn btn-primary btn-block" onClick={login}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
