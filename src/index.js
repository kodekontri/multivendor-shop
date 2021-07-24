import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import App from "./App";
import Register from "./pages/Register"
import Login from "./pages/Login"
import Basic from "./layouts/Basic";
import store from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Basic>
            <App />
          </Basic>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
