import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRouteGeneral({ userType, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (userType === "Standard" || userType === "Admin") {
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

export default ProtectedRouteGeneral;
