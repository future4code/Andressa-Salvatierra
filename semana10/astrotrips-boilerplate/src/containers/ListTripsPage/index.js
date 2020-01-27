import React from "react";
import { connect } from "react-redux";
import { fetchTrips } from "../../actions/tripActions"
import { getTripIdAction } from "../../actions/tripActions"
import { push } from "connected-react-router"
import { routes } from "../Router"

class ListTripsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTrips()
    }

    handleFetchTripDetail = (e) => {
        this.props.getTripId(e.target.id)
        this.props.goToTripDetails()
    }


    render () {
        console.log(this.state.storeTripId)
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
    getTripId: (tripId) => dispatch(getTripIdAction(tripId)),
    goToTripDetails: () => dispatch(push(routes.detailsTrip))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListTripsPage);