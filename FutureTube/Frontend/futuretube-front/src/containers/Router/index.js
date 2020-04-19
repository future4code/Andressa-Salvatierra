import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Home from "../HomePage"
import Login from "../LoginPage"
import SignUp  from "../SignUpPage"
import ChangePassword from "../ChangePasswordPage"
import UserVideos from "../UserVideosPage"
import UploadVideo from "../UploadVideoPage"
import VideoDetails from "../VideoDetailsPage"
import NotFoundPage from "../NotFoundPage"

export const routes = {
  root: '/',
  login: '/login',
  signUp: '/signup',
  changePassword: '/changepassword',
  userVideos: '/videos/user',
  uploadVideo: '/videos/uploadvideo',
  videoDetails: '/videos/videodetails'
  
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={Home} />
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.signUp} component={SignUp} />
        <Route exact path={routes.changePassword} component={ChangePassword} />
        <Route exact path={routes.userVideos} component={UserVideos} />
        <Route exact path={routes.uploadVideo} component={UploadVideo} />
        <Route exact path={routes.videoDetails} component={VideoDetails} />
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
