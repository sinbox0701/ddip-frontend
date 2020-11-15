import React from "react";
import PropTypes from "prop-types";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../Routes/Home";
import Auth from "../Routes/Auth";
 
//Login시 
const LoggedInRoutes = () => (
    <>
        <Route exact path="/" component={Home}/>
    </>
);
//Login X
const LoggedOutRoutes = () => (
    <>
        <Route exact path="/" component={Auth}/>
    </>
);
 
//Router has only one prob => isLoggedIn
const AppRouter = ({isLoggedIn}) => (
    <Router>
        <Switch>{isLoggedIn ? <LoggedInRoutes/>:<LoggedOutRoutes/>}</Switch>
    </Router>
);
 
AppRouter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};
 
export default AppRouter;