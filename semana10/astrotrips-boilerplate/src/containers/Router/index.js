import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import ApplicationPage from "../ApplicationPage";
import CreateTripPage from "../CreateTripPage";
import ListTripsPage from "../ListTripsPage";
import TripDetailsPage from "../TripDetailsPage";



const routes = {
  root: "/",
  application: "/application-form",
  login: "/login",
  createTrip: "/trips/create",
  listTrips: "/trips/list",
  detailsTrip: "/trips/details"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={LoginPage} />
        <Route path={routes.application} component={ApplicationPage} />
        <Route path={routes.createTrip} component={CreateTripPage} />
        <Route path={routes.listTrips} component={ListTripsPage} />
        <Route path={routes.detailsTrip} component={TripDetailsPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
