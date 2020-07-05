import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  count: 1,
  color: "pink",
  divArr: {},
  textColor: "black",
};

function reducer(state = initialState, action) {
  if (action.type === "INCREMENT") {
    state.count++;
    if (state.count > 10) state.textColor = "purple";
  } else if (action.type === "DECREMENT") {
    state.count = state.count - 1 < 1 ? 1 : state.count - 1;
    if (state.count <= 10) state.textColor = "black";
  } else if (action.type === "RESET") {
    state.count = 1;
    state.textColor = "black";
  } else if (action.type === "CHANGECOLOR") {
    state.color = action.payload.all;
  } else if (action.type === "CHANGEINDIVIDUAL") {
    state.divArr[action.payload.id] = action.payload.color;
  }
  state.divArr = { ...state.divArr };
  return { ...state };
}

const store = createStore(
  reducer,
  // Hooks up Redux Devtools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
