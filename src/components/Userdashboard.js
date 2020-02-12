import React, { Component } from "react";
import UserHeader from './Userheader';
import { Route } from "react-router-dom";
import Image1 from "./images/book.jpg";
import Image2 from "./images/book2.jpg"
import { Carousel } from "react-bootstrap";


export default class Userdashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <React.Fragment>
                <Route component={UserHeader} />


                <p>user dash</p>
            </React.Fragment>
        );
    }

}


