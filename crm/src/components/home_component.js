import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const user = useSelector((state) => state.user);
  const { name } = user;

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          {name ? (
            <h2>Welcome {name} to the CRM system</h2>
          ) : (
            <h2>Please Login to continue</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
