import React from "react";
import ReactDom from "react-dom";
import SignUp from "./components/signup.js"
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
                            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar>
                </>
                <div >
                    <Switch>
                        <Route exact path="/signup" component={SignUp} />
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