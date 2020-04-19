import React from 'react';
import { connect } from "react-redux";
import Header from "../Header"
import { MainContainer } from "../../style/divContainers"

const Login = () => {
    return (
        <MainContainer>
            <Header text="Login"/>
        </MainContainer>
    )
}

export default connect()(Login)