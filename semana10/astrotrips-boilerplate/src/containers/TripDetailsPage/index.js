import React from "react";
import { connect } from "react-redux";
import { fetchClickedTripDetails } from "../../actions/tripActions"

class TripDetailsPage extends React.Component {

    componentDidMount() {
        console.log(this.props.clickedTripId)
        this.props.fetchClickedTrip(this.props.clickedTripId)
    }

    render () {
            return (
                <div>
                    Detalhes da viagem
                </div>
            )

        }

    }
        



const mapStateToProps = state => {
    return {
        allTrips: state.tripsReducer.allTrips,
        clickedTripId: state.tripsReducer.tripId,
        detailsTripToBeShown: state.tripsReducer.detailsClickedTrip

    }
}

const mapDispatchToProps = dispatch => ({
    fetchClickedTrip: (tripId) => dispatch(fetchClickedTripDetails(tripId)),

})

export default connect(mapStateToProps, mapDispatchToProps)(TripDetailsPage);