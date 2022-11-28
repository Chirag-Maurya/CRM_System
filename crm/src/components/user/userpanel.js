import React from "react";
import { Link, withRouter } from "react-router-dom";

function User_Panel() {
  return (
    <div className="two-column-wrapper">
      <div className="card-table">
        <h4>View all table and lists</h4>
        <p>Click on any button to view the respective list</p>
        <ul>
          <li className="card-list">
            <Link to={"/usercompanymst/:CompanyCode"}>
              <button className="btn-table">Company Master</button>
            </Link>
          </li>
          <li className="card-list">
            <Link to={"/usercustomermst/:CompanyCode"}>
              <button className="btn-table">Customer Master</button>
            </Link>
          </li>
          <li className="card-list">
            <Link to={"/userparammst/:CompanyCode"}>
              <button className="btn-table">Parameter Master</button>
            </Link>
          </li>
          <li className="card-list">
            <Link to={"/userticketmst/:CompanyCode"}>
              <button className="btn-table">Ticket Master</button>
            </Link>
          </li>
          <li className="card-list">
            <Link to={"/usertrmst/:CompanyCode"}>
              <button className="btn-table">Total Rights Master</button>
            </Link>
          </li>
          <li className="card-list">
            <Link to={"/trntype"}>
              <button className="btn-table">Trn Type Master</button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="card-form">
        <h4>View all forms</h4>
        <p>Click on any button to view the respective form</p>
        <ul>
          <li className="card-list">
            <Link to={"/cpmenter"}>
              <button className="btn-form">Company Form</button>
            </Link>
          </li>
          <li className="card-list">
            <Link to={"/ctmenter"}>
              <button className="btn-form">Customer Form</button>
            </Link>
          </li>
          <li className="card-list">
            <Link to={"/prmenter"}>
              <button className="btn-form">Parameter Form</button>
            </Link>
          </li>
          <li className="card-list">
            <Link to={"/tcmenter"}>
              <button className="btn-form">Ticket Form</button>
            </Link>
          </li>
          <li className="card-list">
            <Link to={"/trnenter"}>
              <button className="btn-form">Trn Type Form</button>
            </Link>
          </li>
          <li className="card-list">
            <Link to={"/register"}>
              <button className="btn-form">User Form</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default withRouter(User_Panel);
