import "bootstrap/dist/css/bootstrap.min.css";
import React /*useState*/ from "react";
import notfound1 from "../notfound1.jpg";

function notfound() {
  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <img
            className="notfound"
            src={notfound1}
            alt="Error 404. The page you requested does not exist or has moved."
          ></img>
        </div>
      </div>
    </div>
  );
}

export default notfound;
