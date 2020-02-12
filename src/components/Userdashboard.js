import React, { Component } from "react";
import UserHeader from './headers/Userheader';
import { Route } from "react-router-dom";
import Image1 from "./images/book.jpg";
import Image2 from "./images/book2.jpg"
import { Carousel } from "react-bootstrap";
import './userdashboard.css';

export default class Userdashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Route component={UserHeader} />
                <Carousel className="maindiv"></Carousel>
                <p>user dash</p>
            </React.Fragment>
        );
    }

}


