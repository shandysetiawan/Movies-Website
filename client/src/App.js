import React, { Component } from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar'
import Search from './components/Search'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }

  render() {
    return (
      <>
        <div className="container">
          <Navbar></Navbar>
          <Search></Search>
          <Card> </Card>
        </div>
      </>
    )
  }

}


export default App;
