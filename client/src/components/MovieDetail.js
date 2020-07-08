import React, { useState, useEffect } from 'react';
import useFetch from "../services/hooks/useFetch"
import {
    useParams
} from "react-router-dom";

export default function MovieDetail(props) {

    const param = useParams()

    const { data: movie, loading, error } = useFetch(`http://api.themoviedb.org/3/movie/${param.id}?api_key=27ea68148715a4e935cbcfa892205b77`)


    if (loading) return <h1>Loading</h1>
    if (error) return <h1>Error</h1>
    return (
        <>
            <div className="card text-center">
                <div className="card-header">
                </div>
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <img src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path} alt={movie.title}></img>
                    <p>Rating {movie.vote_average}</p>
                    <p className="card-text">{movie.overview}</p>
                </div>
                <div className="card-footer text-muted">
                    Release Date : {movie.release_date}
                </div>
            </div>
        </>)
}