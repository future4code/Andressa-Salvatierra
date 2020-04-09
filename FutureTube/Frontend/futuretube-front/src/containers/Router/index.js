import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import SignUp  from "../SignUp"


export const routes = {
  root: '/',  
  login: '/login/',
  signUp: '/signup/',
  home: '/home/'
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        {/* <Route exact path={routes.root} component={InitialPage} />
        <Route exact path={routes.login} component={Login} /> */}
        <Route exact path={routes.signUp} component={SignUp} />
        {/* <Route exact path={routes.home} component={Home} />     */}
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
