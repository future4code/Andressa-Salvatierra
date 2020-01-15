import React from "react";
import { connect } from "react-redux";

class ListTripsPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                Lista de Viagens
            </div>
        )
    }
} 

export default connect() (ListTripsPage);