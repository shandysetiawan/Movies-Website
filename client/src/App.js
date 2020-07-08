import React, { } from 'react';
// import { Provider } from 'react-redux'
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
      <div className="container">
        <Router>
          <Switch>
            <Route path="/movies/:id" component={Movie} />
            <Route path="/favorites" exact component={Favorites} />
            <Route path="/" exact component={Dashboard} />
          </Switch>

        </Router>
      </div>
    </>
  )

}

