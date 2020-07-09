import React, { } from 'react';
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";

export default function Favorite() {

    const movies = useSelector(state => state.favReducer.favs)

    if (movies.length === 0) {
        return (
            <>
                <Navbar />
                <h1 style={{ textAlign: "center", color: "white" }}>No Favorites Movies</h1>
            </>
        )
    }
    return (
        <>
            <Navbar />
            <h1 style={{ textAlign: "center", color: "white" }}>My Favorites</h1>
            <div className="row mt-5 justify-content-around">
                {movies.map((movie) => (
                    <div className="card ml-5 mt-5 text-center" style={{ width: "18rem" }} key={movie.id}>
                        <img src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path} className="card-img-top" alt={movie.title} />
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <Link to={`/movies/${movie.id}`}>
                                <button className="btn btn-success">Detail</button>
                            </Link>
                        </div>
                    </div>

                ))
                }
            </div>
        </>)



}

