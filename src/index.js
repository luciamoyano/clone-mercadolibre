import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import ItemPage from "./pages/ItemPage";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/search/:site_id" component={Search} />
    <Route exact path="/product/:product_id" component={ItemPage} />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
