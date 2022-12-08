import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Info from "../page/info";
import SettingInfo from "../page/settingInfo";
const Routes = () => {
  return (
    <Router>
      <Route exact path="/info/:id" component={Info}/>
      <Route exact path="/setting/:id" component={SettingInfo}/>
    </Router>
  );
};

export default Routes;
