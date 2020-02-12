import React from "react";

import {
    BrowserRouter as Router,
    Route,
    Switch,

} from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/signup";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Signup} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </Router>
        </>
    );
}

export default App;