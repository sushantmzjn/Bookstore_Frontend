import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';



class SignUp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="4">
                        <form>
                            <p className="h5 text-center mb-4">Sign up</p>
                            <div className="grey-text">
                                <MDBInput label="FullName" icon="user" group type="text" validate error="wrong"
                                    success="right" />
                                <MDBInput label="Username" icon="user" group type="text" validate error="wrong"
                                    success="right" />
                                <MDBInput label="Address" icon="user" group type="text" validate error="wrong"
                                    success="right" />
                                <MDBCol>
                                    <p>Please select your gender:</p>
                                    <input type="radio" name="gender" value="male" /> Male<br></br>
                                    <input type="radio" name="gender" value="female" /> Female
                                    </MDBCol>
                                <MDBInput label="Password" icon="exclamation-triangle" group type="text" validate
                                    error="wrong" success="right" />
                                <MDBInput label="Confirm password" icon="lock" group type="password" validate />
                            </div>
                            <div className="text-center">
                                <MDBBtn color="primary">Register</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}
export default SignUp;