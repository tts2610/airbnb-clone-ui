import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import ExpDetail from "./ExpDetail";
import FourOhFourPage from "./FourOFour";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/exp/:expId">
          <ExpDetail />
        </Route>
        <Route path="/topics">
          <Home />
        </Route>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route exact={true} path="/filtered">
          <HomeFiltered />
        </Route>
        <Route path="/*">
          <FourOhFourPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
