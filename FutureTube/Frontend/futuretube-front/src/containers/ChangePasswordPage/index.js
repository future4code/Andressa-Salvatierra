import React from 'react';
import { connect } from "react-redux";
import Header from "../Header"

const ChangePassword = () => {
    return (
        <div>
            <Header text="Change Password"/>
        </div>
      );
}

export default connect()(ChangePassword)