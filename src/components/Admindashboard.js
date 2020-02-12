import React, { Component } from "react";
import AdminHeader from './headers/Adminheader';
import { Route } from "react-router-dom";


export default class Admindashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Route component={AdminHeader} />
              
                <p>admin dash</p>
            </React.Fragment>
        );
    }

}


