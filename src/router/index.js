import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "../components/header";
import Layout from "../layouts";
import Home from "../page/home";
import Info from "../page/info";
import SettingInfo from "../page/settingInfo";
const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/info/:id" component={Info} />
        <Route path="/setting" component={SettingInfo} />
      </Switch>
    </Router>
  );
};

export default Routes;
