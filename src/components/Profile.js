import React, { Component } from "react";

import Userheader from './Userheader';
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