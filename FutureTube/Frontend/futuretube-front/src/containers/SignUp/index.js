import React from "react"
import { connect } from 'react-redux';
import Header from "../Header"

const SignUp = () => (
    <div>
        <Header></Header>
    </div>
  );
  
export default connect()(SignUp)