const initialState = {
    allTrips: [],
    tripId: ""
}

const tripsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TRIPS":
            return {...state, allTrips: action.payload.trips}
        case "GET_TRIP_ID":
            return {...state, tripId: action.payload.tripId}
        default:
            return state;
    }
}

export default tripsReducer;