import axios from "axios";


const setTrips = (trips) => ({
    type: "SET_TRIPS",
    payload: {
        trips
    }
})

export const fetchTrips = () => async (dispatch) => {
    try {
        const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/futureX/andressa/trips")
    
        dispatch(setTrips(response.data.trips))
    } catch (error) {
        console.log(error)
        window.alert("Não foi possível carregar as viagens")
    }
}

export const getTripIdAction = (tripId) => ({
    type: "GET_TRIP_ID",
    payload: {
        tripId
    }
})

const setClickedTripDetails = (details) => ({
    type: "SET_CLICKED_TRIP_DETAILS",
    payload: {
        details
    }
})

export const fetchClickedTripDetails = (clickedTripId) => async (dispatch) => {
    try {
        const response = await axios.get(
            `https://us-central1-missao-newton.cloudfunctions.net/futureX/andressa/trip/${clickedTripId}?=`)

            dispatch(setClickedTripDetails(response.data.trip))

    } catch(error) {
        console.log(error)
        window.alert("Não foi possível carregar os dados da viagem")
    }
}

