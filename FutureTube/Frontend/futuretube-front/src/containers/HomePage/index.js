import React from 'react';
import { connect } from "react-redux";
import Header from "../Header"

const Home = (props) => {
    return (
        <div>
            <Header text="Home"/>
        </div>
    )

}

export default connect()(Home)