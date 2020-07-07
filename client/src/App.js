import React, { useState } from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar'
import Search from './components/Search'
import './App.css';

export default () => {
  const [movies, setMovies] = useState([])


  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        <Search setMovies={setMovies}></Search>
        <h1>Movies Highlight</h1>
        <Card setMovies={setMovies} movies={movies}> </Card>
      </div>
    </>
  )

}

