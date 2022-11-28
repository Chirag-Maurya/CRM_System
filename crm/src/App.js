import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";

import ProtectedRouteAdmin from "./components/adminProtectedRoute";
import ProtectedRouteStandard from "./components/standardProtectedRoute";
import ProtectedRouteGeneral from "./components/generalProtectedRoute";

import CompanyMaster_Enter from "./components/companymaster_enter";
import Login from "./components/login_component";
import Register from "./components/register_component";
import Home from "./components/home_component";
import CustomerMaster_Enter from "./components/customermaster_enter";
import ParamMaster_Enter from "./components/parammaster_enter";
import TrnType_Enter from "./components/trntype_enter";
import TotalRights_Enter from "./components/totalrightsmst_enter";
import TicketMaster_Enter from "./components/ticketmaster_enter";
import AllCompanies from "./components/companymstlist";
import AllCustomers from "./components/customermstlist";
import AllParam from "./components/parammstlist";
import AllTickets from "./components/ticketmstlist";
import AllTotalRights from "./components/totalrightsmstlist";
import AllTrnTypes from "./components/trntypelist";
import AllUsers from "./components/usermstlist";
import AllUsersRights from "./components/userrightsmstlist";
import notfound from "./components/default";
import CompanyMaster_Edit from "./components/editcompany";
import CustomerMaster_Edit from "./components/editcustomer";
import ParamMaster_Edit from "./components/editparam";
import TicketMaster_Edit from "./components/editticket";
import TotalRightsMaster_Edit from "./components/edittotalrights";
import TrnType_Edit from "./components/edittrntype";
import UserMaster_Edit from "./components/edituser";
import UserRightsMaster_Edit from "./components/edituserrights";
import Admin_Panel from "./components/adminpanel";
import Nav from "./components/nav_component";
import Profile from "./components/profile";

import AllUserCompanies from "./components/user/companymstlist";
import AllUserCustomers from "./components/user/customermstlist";
import AllUserParam from "./components/user/parammstlist";
import AllUserTickets from "./components/user/ticketmstlist";
import AllUserTotalRights from "./components/user/totalrightsmstlist";
import User_Panel from "./components/user/userpanel";

function App() {
  const userrights = useSelector((state) => state.userrights);
  const { rightsName } = userrights;

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        {/********________COMMON ROUTES________********/}
        <ProtectedRouteGeneral
          exact
          path="/userprofile"
          component={Profile}
          userType={rightsName}
        />
        <ProtectedRouteGeneral
          exact
          path="/register"
          component={Register}
          userType={rightsName}
        />
        <ProtectedRouteGeneral
          exact
          path="/cpmenter"
          component={CompanyMaster_Enter}
          userType={rightsName}
        />
        <ProtectedRouteGeneral
          exact
          path="/ctmenter"
          component={CustomerMaster_Enter}
          userType={rightsName}
        />
        <ProtectedRouteGeneral
          userType={rightsName}
          exact
          path="/prmenter"
          component={ParamMaster_Enter}
        />
        <ProtectedRouteGeneral
          userType={rightsName}
          exact
          path="/trnenter"
          component={TrnType_Enter}
        />
        <ProtectedRouteGeneral
          userType={rightsName}
          exact
          path="/tcmenter"
          component={TicketMaster_Enter}
        />
        <ProtectedRouteGeneral
          userType={rightsName}
          exact
          path="/upcompanymaster/:CmpnyCode"
          component={CompanyMaster_Edit}
        />
        <ProtectedRouteGeneral
          userType={rightsName}
          exact
          path="/upcustomermaster/:AccCode"
          component={CustomerMaster_Edit}
        />
        <ProtectedRouteGeneral
          userType={rightsName}
          exact
          path="/upparammaster/:ParamID"
          component={ParamMaster_Edit}
        />
        <ProtectedRouteGeneral
          userType={rightsName}
          exact
          path="/upticketmaster/:DocNo"
          component={TicketMaster_Edit}
        />
        <ProtectedRouteGeneral
          userType={rightsName}
          exact
          path="/uptotalrightsmaster/:RID"
          component={TotalRightsMaster_Edit}
        />
        <ProtectedRouteGeneral
          userType={rightsName}
          exact
          path="/uptrntype/:TrnTypeId"
          component={TrnType_Edit}
        />
        <ProtectedRouteGeneral
          userType={rightsName}
          exact
          path="/upusermaster/:UserID"
          component={UserMaster_Edit}
        />
        <ProtectedRouteGeneral
          userType={rightsName}
          exact
          path="/upuserrightsmaster/:UserID"
          component={UserRightsMaster_Edit}
        />
        <ProtectedRouteGeneral
          userType={rightsName}
          exact
          path="/trntype"
          component={AllTrnTypes}
        />
        {/********________ADMIN ROUTES________********/}
        <ProtectedRouteAdmin
          userType={rightsName}
          exact
          path="/trmenter"
          component={TotalRights_Enter}
        />
        <ProtectedRouteAdmin
          userType={rightsName}
          exact
          path="/companymst"
          component={AllCompanies}
        />
        <ProtectedRouteAdmin
          userType={rightsName}
          exact
          path="/customermst"
          component={AllCustomers}
        />
        <ProtectedRouteAdmin
          userType={rightsName}
          exact
          path="/parammst"
          component={AllParam}
        />
        <ProtectedRouteAdmin
          userType={rightsName}
          exact
          path="/ticketmst"
          component={AllTickets}
        />
        <ProtectedRouteAdmin
          userType={rightsName}
          exact
          path="/trmst"
          component={AllTotalRights}
        />
        <ProtectedRouteAdmin
          userType={rightsName}
          exact
          path="/usermst"
          component={AllUsers}
        />
        <ProtectedRouteAdmin
          userType={rightsName}
          exact
          path="/userrightsmst"
          component={AllUsersRights}
        />
        <ProtectedRouteAdmin
          userType={rightsName}
          exact
          path="/admin"
          component={Admin_Panel}
        />
        {/********________STANDARD ROUTES________********/}
        <ProtectedRouteStandard
          exact
          path="/usercompanymst/:CompanyCode"
          component={AllUserCompanies}
          userType={rightsName}
        />
        <ProtectedRouteStandard
          userType={rightsName}
          exact
          path="/usercustomermst/:CompanyCode"
          component={AllUserCustomers}
        />
        <ProtectedRouteStandard
          userType={rightsName}
          exact
          path="/userparammst/:CompanyCode"
          component={AllUserParam}
        />
        <ProtectedRouteStandard
          userType={rightsName}
          exact
          path="/userticketmst/:CompanyCode"
          component={AllUserTickets}
        />
        <ProtectedRouteStandard
          userType={rightsName}
          exact
          path="/usertrmst/:CompanyCode"
          component={AllUserTotalRights}
        />
        <ProtectedRouteStandard
          userType={rightsName}
          exact
          path="/userdashboard"
          component={User_Panel}
        />
        <Route component={notfound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
