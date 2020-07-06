import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import ExpDetail from "./ExpDetail";
import FourOhFourPage from "./FourOFour";
import HomeFiltered from "./HomeFiltered";
import AddExperiences from "./AddExperiences";
import "rheostat/initialize";
import "rheostat/css/rheostat.css";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isHost = useSelector((state) => state.isHost);
  console.log("tts", isHost);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isHost || localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_USER_HOST)) {
          return <Component {...rest} {...props} />;
        } else {
          return <Redirect to="/404" />;
        }
      }}
    />
  );
};

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
        <ProtectedRoute path="/addExp" component={AddExperiences} />
        <Route path="/*">
          <FourOhFourPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
