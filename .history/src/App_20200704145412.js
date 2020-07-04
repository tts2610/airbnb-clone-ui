import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import ExpDetail from "./ExpDetail";

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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
