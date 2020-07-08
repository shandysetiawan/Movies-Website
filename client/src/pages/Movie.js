import React, { } from 'react';
import Navbar from '../components/Navbar'
import MovieDetail from '../components/MovieDetail'

export default function Movie({ match }) {

    // useEffect(() => {
    //     console.log("match>>>", match.params.id)
    // }, [])


    return (
        <>
            <Navbar />
            <MovieDetail movieId={match.params.id} />
        </>)



}