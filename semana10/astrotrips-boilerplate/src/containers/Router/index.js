import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import ApplicationPage from "../ApplicationPage";
import CreateTripPage from "../CreateTripPage";
import ListTripsPage from "../ListTripsPage";
import TripDetailsPage from "../TripDetailsPage";
import HomePage from "../HomePage"




export const routes = {
  root: "/",
  application: "/application-form",
  login: "/login",
  createTrip: "/trips/create",
  listTrips: "/trips/list",
  detailsTrip: "/trips/details",
  homePage: "/home"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={HomePage} exact/>
        <Route path={routes.home} component={HomePage} exact/>
        <Route path={routes.login} component={LoginPage} exact/>
        <Route path={routes.application} component={ApplicationPage} exact/>
        <Route path={routes.createTrip} component={CreateTripPage} exact/>
        <Route path={routes.listTrips} component={ListTripsPage} exact/>
        <Route path={routes.detailsTrip} component={TripDetailsPage} exact/>
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
