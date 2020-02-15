import React, { Component } from "react";

import Adminheader from './headers/Adminheader';
import { Route } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { Container, Form, Table, Button, Modal } from "react-bootstrap";
import Axios from "axios";

export default class Addproduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            description: "",
            price: "",
            categories: "",
            config: {
                headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
            }
        }
    }

    titleHandler = (e) => {
        this.setState({ title: e.target.value })
    }
    descriptionHandler = (e) => {
        this.setState({ description: e.target.value })
    }
    priceHandler = (e) => {
        this.setState({ price: e.target.value })
    }
    categoryHandler = (e) => {
        this.setState({ categories: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault();
        var addProduct = {
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
            categories: this.state.categories
        }
        console.log(addProduct);
        Axios.post(`http://localhost:3012/book`, addProduct, this.state.config)
            .then((response) => {
                console.log(response.data);
                location.href="/addproduct"
            }).catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <React.Fragment>
                <Route component={Adminheader} />
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="4">
                            <Form onSubmit={this.submitHandler}>
                                <p className="h5 text-center mb-4">Add Product</p>
                                <MDBInput label="Book Title" type="text" value={this.state.title} onChange={this.titleHandler} required />
                                <MDBInput label="Description" type="text" value={this.state.description} onChange={this.descriptionHandler} required />
                                <MDBInput label="Price" type="text" value={this.state.price} onChange={this.priceHandler} required />
                                <p>Choose a Category :</p>
                                <input type="radio" name="comic" value="comic" checked={this.state.categories === 'comic'} onChange={this.categoryHandler} /> comic<br></br>
                                <input type="radio" name="thriller" value="thriller" checked={this.state.categories === 'thriller'} onChange={this.categoryHandler} /> thriller<br></br>
                                <input type="radio" name="horror" value="horror" checked={this.state.categories === 'horror'} onChange={this.categoryHandler} /> horror<br></br>
                                <input type="radio" name="romantic" value="romantic" checked={this.state.categories === 'romantic'} onChange={this.categoryHandler} />romantic
                                 <Button type="submit" color="primary" onClick={this.Addproduct}>Post</Button>
                            </Form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <h1>add product</h1>
            </React.Fragment>
        )
    }
}