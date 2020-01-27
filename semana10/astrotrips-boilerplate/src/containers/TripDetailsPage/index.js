import React from "react";
import { connect } from "react-redux";
import { fetchTrips } from "../../actions/tripActions"

class TripDetailsPage extends React.Component {

    componentDidMount() {
        this.props.fetchTrips()
    }

    render () {
        console.log(this.props.allTrips)
        const tripId = "IraGCno6nLATvX8CemI7"

        if (tripId === "IraGCno6nLATvX8CemI7") {
            return (
                <div>
                    Detalhes da viagem
                    <ul>
                        {this.props.allTrips.map((trip) => 
                            <div>
                                <li key={new Date().getTime()}>{trip.name}</li>
                                <li key={new Date().getTime()}>{trip.planet}</li>
                                <li key={new Date().getTime()}>{trip.date}</li>
                                <li key={new Date().getTime()}>{trip.description}</li>
                                <li key={new Date().getTime()}>{trip.durationInDays}</li>
                                <hr/>
                            </div>
                        )}
                    </ul>
                </div>
            )

        }

    }
        

}

const mapStateToProps = state => {
    return {allTrips: state.tripsReducer.allTrips}
}

const mapDispatchToProps = dispatch => ({
    fetchTrips: () => dispatch(fetchTrips()),
    
})

export default connect(mapStateToProps, mapDispatchToProps)(TripDetailsPage);