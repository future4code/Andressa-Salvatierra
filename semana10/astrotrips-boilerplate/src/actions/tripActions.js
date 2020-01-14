import axios from "axios";


const setTrips = (trips) => ({
    type: "SET_TRIPS",
    payload: {
        trips
    }
})

export const fetchTrips = () => async (dispatch) => {
    const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/futureX/andressa/trips")
    
    dispatch(setTrips(response.data.trips))
}