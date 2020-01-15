import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router"

const HomePage = (props) => {
        return (    
            <div>Home 
                <button onClick={props.goToLogin}>Login</button>
            </div>
        )
    }
    

function mapDispatchToProps(dispatch) {
    return {
        goToLogin: () => dispatch(push(routes.login))
    }
}

export default connect(null, mapDispatchToProps) (HomePage);