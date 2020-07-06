import React, { Component } from 'react';
import Card from './components/Card';
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
      <Card> </Card>
    )
  }

}


export default App;
