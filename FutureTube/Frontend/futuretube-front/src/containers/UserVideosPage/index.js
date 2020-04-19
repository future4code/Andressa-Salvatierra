import React from 'react';
import { connect } from "react-redux";
import Header from "../Header"

const UserVideos = () => {
    return (
        <div>
            <Header text="User Videos"/>
        </div>
      );
}

export default connect()(UserVideos)