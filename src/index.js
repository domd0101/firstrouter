import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route
} from 'react-router-dom';
import App from './App';
import './index.css';
import Store from './store';
import Product from './product';


ReactDOM.render(
  <HashRouter>
    <div>
      <Route  path="/" component={App}/>
      <Route  path="/store" component={Store}/>
      <Route  path="/product/:id" component={Product}/>
    </div>
  </HashRouter>,
  document.getElementById('root')
);
