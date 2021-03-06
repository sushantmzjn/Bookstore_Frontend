import React from "react";
import { Row, Col, Container, Button, Form } from "react-bootstrap";
import { Route } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import axios from "axios";
import Header from "./headers/Header";


export default class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: '',
            address: '',
            username: '',
            gender: '',
            password: '',
            confirm_password: '',
            isRegistered: false
        }
    }

    FullnameHandler = (e) => {
        this.setState({ fullName: e.target.value });
    }

    AddressHandler = (e) => {
        this.setState({ address: e.target.value });
    }

    UsernameHandler = (e) => {
        this.setState({ username: e.target.value });
    }

    GenderHandler = (e) => {
        this.setState({ gender: e.target.value });
    }

    PasswordHandler = (e) => {
        this.setState({ password: e.target.value });
    }

    ConfirmPasswordHandler = (e) => {
        this.setState({ confirm_password: e.target.value });
    }

    //submit handler for user

    submitHandler = (e) => {
        e.preventDefault();
        var userData = {
            fullName: this.state.fullName,
            address: this.state.address,
            username: this.state.username,
            gender: this.state.gender,
            password: this.state.password,
            confirm_password: this.state.confirm_password,
            isRegistered: true
        }

        console.log(userData);
        axios.post('http://localhost:3012/users/signup', userData)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('usertoken', response.data.token)

            }).catch((err) => { console.log(err) })
    };

    render() {
        return (
            <React.Fragment>
                <Route component={Header} />
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="4">
                            <Form onSubmit={this.submitHandler}>
                                <p className="h5 text-center mb-4">Sign up</p>
                                <MDBInput label="FullName" type="text" value={this.state.fullName} onChange={this.FullnameHandler} required />
                                <MDBInput label="Address" type="text" value={this.state.address} onChange={this.AddressHandler} required />
                                <MDBInput label="Username" type="text" value={this.state.username} onChange={this.UsernameHandler} required />
                                <p>Please select your gender:</p>
                                <input type="radio" name="gender" value="male" checked={this.state.gender === 'male'} onChange={this.GenderHandler} /> Male<br></br>
                                <input type="radio" name="gender" value="female" checked={this.state.gender === 'female'} onChange={this.GenderHandler} />Female
                            <MDBInput label="Password" type="password" value={this.state.password} onChange={this.PasswordHandler} />
                                <MDBInput label="Confirm password" type="password" value={this.state.confirm_password} onChange={this.ConfirmPasswordHandler} />
                                <Button type="submit" color="primary" onClick={this.signup}>Register</Button>
                            </Form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </React.Fragment>
        )
    }
}

