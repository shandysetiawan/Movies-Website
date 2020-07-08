import React, { useState } from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar'
import Search from '../components/Search'

export default function Dashboard() {
    const [movies, setMovies] = useState([])


    return (
        <>
            <Navbar />
            <Search setMovies={setMovies}></Search>
            <h1 className="mt-2" style={{ textAlign: "center", color: "white" }}>Movies Highlights</h1>
            <Card setMovies={setMovies} movies={movies}> </Card>
        </>
    )



}