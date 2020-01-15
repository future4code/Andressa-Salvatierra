import React from "react";
import { connect } from "react-redux";
import { fetchTrips } from "../../actions/tripActions"
import { getTripIdAction } from "../../actions/tripActions"

class ListTripsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            storeTripId: ""
        }
    }

    componentDidMount() {
        this.props.fetchTrips()
    }

    handleFetchTripDetail = (e) => {
        this.setState({storeTripId: e.target.id})
        this.props.getTripId(this.state.storeTripId)
    }


    render () {
        return (
            <div>
                Lista de Viagens
                <ul>
                    {this.props.allTrips.map((trip) => 
                    <div>
                        <li key={trip.id}>{trip.name}</li>
                        <button onClick={this.handleFetchTripDetail} id={trip.id}>Detalhes da viagem</button>
                    </div>
                    )}
                </ul>
            </div>  
        )
    }
} 

const mapStateToProps = state => {
    return {
        allTrips: state.tripsReducer.allTrips,
        clickedTripId: state.tripsReducer.tripId
    }
}

const mapDispatchToProps = dispatch => ({
    fetchTrips: () => dispatch(fetchTrips()),
    getTripId: (tripId) => dispatch(getTripIdAction(tripId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListTripsPage);