import React from "react";
import ReactDom from "react-dom";
import Signup from "./components/Signup.js"
import Login from "./components/login.js"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import {

    Navbar, Nav, Form, FormControl, Button

} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from "react-router-dom";


class Body1 extends React.Component {
    constructor(props) {
        super(props);
    }

    Header = () => {
        return (
            <div>
                <>
                    <Navbar bg="dark" variant="dark">
                        <Nav className="mr-auto">
                            <Nav.Link href="/index">Book Store</Nav.Link>
                            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar>
                </>
                <div >
                    <Switch>
                        <Route exact path="/signup" component={Signup} />
                        <Route exact path="/login" component={Login} />
                    </Switch>

                </div>
            </div>
        )
    }

    render() {
        return (
            <Router>
                <this.Header />
            </Router>
        )
    }
}

ReactDom.render(<Body1 />, document.getElementById("body1"));