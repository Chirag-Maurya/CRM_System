import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRouteAdmin({ userType, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (userType === "Admin") {
          return <Component />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
}

export default ProtectedRouteAdmin;
