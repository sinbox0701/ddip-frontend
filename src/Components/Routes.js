import React from "react";
import PropTypes from "prop-types";
import {Route, Switch} from "react-router-dom";
import Home from "../Routes/Home";
import Auth from "../Routes/Auth";
import Search from "../Routes/Search";
import Profile from "../Routes/Profile";
 
//Login시 
const LoggedInRoutes = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/search" component={Search} />
        <Route path="/:username" component={Profile} />
    </Switch>
);
//Login X
const LoggedOutRoutes = () => (
    <Switch>
        <Route exact path="/" component={Auth}/>
    </Switch>
);
 
//Router has only one prob => isLoggedIn
const AppRouter = ({isLoggedIn}) => (
    isLoggedIn ? <LoggedInRoutes/>:<LoggedOutRoutes/>
);
 
AppRouter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};
 
export default AppRouter;