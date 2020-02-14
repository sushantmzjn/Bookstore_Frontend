import React from "react";
import PrivateRoute from "./components/authroute/PrivateRoute";
import Userprivateroute from "./components/authroute/Userprivateroute";

import {
    BrowserRouter as Router,
    Route,
    Switch,

} from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/signup";

import Userdashboard from "./components/UserDashboard";
import Profile from "./components/Profile";

import Admindashboard from "./components/Admindashboard";
import Adminlogin from "./components/adminlogin"
import Customerlist from "./components/Customerlist";
import Productlist from "./components/Productlist";
import Orderlist from "./components/Orderlist";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Signup} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/adminlogin" component={Adminlogin} />
                    {/* user controller */}
                    <Userprivateroute exact path="/userdashboard" component={Userdashboard} />
                    <Userprivateroute exact path="/profile" component={Profile} />
                    {/* admin controller */}
                    <PrivateRoute exact path="/admindashboard" component={Admindashboard} />
                    <PrivateRoute exact path="/customerlist" component={Customerlist} />
                    <PrivateRoute exact path="/productlist" component={Productlist} />
                    <PrivateRoute exact path="/orderlist" component={Orderlist} />

                </Switch>
            </Router>
        </>
    );
}

export default App;