import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './pages/Home';
import Team from './pages/Team';
import Product from './pages/Product';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Home}/>
    <Route exact path="/equipo" component={Team} />
    <Route exact path="/producto/:id" component={Product}/>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
