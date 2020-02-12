import React, { Component } from "react";

import Userheader from './headers/Userheader';
import { Route } from "react-router-dom";

export default class Profile extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <Route component={Userheader}/>
                <p>user Profile</p>
            </React.Fragment>
        )
    }

}