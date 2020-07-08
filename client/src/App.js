import React, { } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import Movie from './pages/Movie'
import Dashboard from './pages/Dashboard'
import Favorites from './pages/Favorites'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

export default () => {


  return (
    <>
      <div className="container" style={{ backgroundColor: "#6f0000" }}>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/movies/:id" component={Movie} />
              <Route path="/favorites" exact component={Favorites} />
              <Route path="/" exact component={Dashboard} />
            </Switch>
          </Router>
        </Provider>
      </div>
    </>
  )

}

