import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  navigator: "",
  searchParams: { minPrice: 1, maxPrice: 100, languages: [], tags: [], page: 1, perPage: 12 },
  isHost: false,
};

function reducer(state = initialState, action) {
  if (action.type === "ADDNAVIGATOR") {
    state.navigator = action.payload.url;
  } else if (action.type === "FILTER") {
    let newParams = { ...state.searchParams };
    for (const [key, value] of Object.entries(action.payload.searchParams)) {
      newParams[key] = value;
    }
    state.searchParams = { ...newParams };
  } else if (action.type === "VERIFYHOST") {
    state.isHost = true;
  }
  return { ...state };
}

const store = createStore(
  reducer,
  // Hooks up Redux Devtools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
