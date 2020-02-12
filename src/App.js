import React from "react";

import {
    BrowserRouter as Router,
    Route,
    Switch,

} from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/signup";

import Userdashboard from "./components/UserDashboard";
import Profile from "./components/Profile";

import Admindashboard from "./components/Admindashboard"

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Signup} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/login" component={Login} />
                    {/* user controller */}
                    <Route exact path="/userdashboard" component={Userdashboard} />
                    <Route exact path="/profile" component={Profile} />
                    {/* admin controller */}
                    <Route exact path="/admindashboard" component={Admindashboard} />

                </Switch>
            </Router>
        </>
    );
}

export default App;