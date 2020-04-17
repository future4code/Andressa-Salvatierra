import React from 'react';
import { connect } from "react-redux";
import Header from "../Header"

const Login = () => {
    return (
        <div>
            <Header text="Login"/>
        </div>
    )
}

export default connect()(Login)