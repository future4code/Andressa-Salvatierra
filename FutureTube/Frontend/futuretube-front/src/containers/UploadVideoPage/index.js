import React from 'react';
import { connect } from "react-redux";
import Header from "../Header"

const UploadVideo = () => {
    return (
        <div>
            <Header text="Upload Video"/>
        </div>
      );
}

export default connect()(UploadVideo)