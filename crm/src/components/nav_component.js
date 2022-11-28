import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { NavDropdown } from "react-bootstrap";
import axios from "axios";
import { logoutUser } from "../redux/actions/userAction";

function Nav() {
  const user = useSelector((state) => state.user);
  const userrights = useSelector((state) => state.userrights);
  const { name, id, loginId } = user;
  const { rightsName } = userrights;
  const history = useHistory();
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  function logout() {
    dispatch(logoutUser());
    localStorage.clear();
    history.push("/login");
    alert(message);
  }

  useEffect(() => {
    axios.get("http://localhost:8000/logout").then((response) => {
      if (response.data.success === true) {
        setMessage(response.data.message);
      }
    });
  }, []);

  function profile() {
    history.push("/userprofile");
  }

  return (
    <nav className="navbar navbar-expand navbar-light fixed-top">
      <ul class="nav">
        <li class="nav-item">
          <Link to={"/"} class="nav-link active" aria-current="page">
            Home
          </Link>
        </li>
        {name ? null : (
          <li class="nav-item">
            <Link to={"/login"} class="nav-link">
              Login
            </Link>
          </li>
        )}
        {rightsName === "Admin" || rightsName === "Standard" ? (
          <li class="nav-item">
            <Link to={"/register"} class="nav-link">
              Register
            </Link>
          </li>
        ) : null}
        {rightsName === "Admin" ? (
          <li class="nav-item">
            <Link to={"/admin"} class="nav-link">
              Admin
            </Link>
          </li>
        ) : null}
        {rightsName === "Standard" ? (
          <li class="nav-item">
            <Link to={"/userdashboard"} class="nav-link">
              Dashboard
            </Link>
          </li>
        ) : null}
      </ul>
      {name ? (
        <ul class="username">
          <li>
            <NavDropdown title={name}>
              <NavDropdown.Item onClick={profile}>
                {id}: {loginId}
              </NavDropdown.Item>
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </li>
        </ul>
      ) : null}
    </nav>
  );
}

export default Nav;
