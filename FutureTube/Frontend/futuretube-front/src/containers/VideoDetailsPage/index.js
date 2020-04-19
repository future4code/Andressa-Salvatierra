import React from 'react';
import { connect } from "react-redux";
import Header from "../Header"

const VideoDetails = () => {
    return (
        <div>
            <Header text="Video Details"/>
        </div>
      );
}

export default connect()(VideoDetails)