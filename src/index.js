import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './pages/Home';
import Search from './pages/Search';
import ItemPage from './pages/ItemPage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Home}/>
    <Route exact path="/search/:site_id" component={Search} />
    <Route exact path="/product/:product_id" component={ItemPage} />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
