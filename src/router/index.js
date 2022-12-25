import React from "react";
import {
  BrowserRouter as Router, Route,
  Switch
} from "react-router-dom";
import Header from "../components/header";
import Home from "../page/home";
import Info from "../page/info";
import SettingInfo from "../page/settingInfo";
const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/info/:id" component={Info} />
        <Route exact path="/setting" component={SettingInfo} />
      </Switch>
    </Router>
  );
};

export default Routes;
