import React from "react";
import { Form, Button } from "react-bootstrap";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="4">
                        <form>
                            <p className="h5 text-center mb-4">Sign in</p>
                            <div className="grey-text">
                                <MDBInput label="Type your username" icon="envelope" type="text" validate error="wrong"
                                    success="right" />
                                <MDBInput label="Type your password" icon="lock" type="password" validate />
                            </div>
                            <div className="text-center">
                                <MDBBtn>Login</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }

}
export default Login;