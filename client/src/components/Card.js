import React, { useEffect } from 'react';
import CardContent from './CardContent'
import { useDispatch, useSelector } from 'react-redux'
import { movieAction } from '../store/actions/movieAction'

export default function Card() {
    const dispatch = useDispatch()
    const movies = useSelector(state => state.movieReducer.movies)
    const error = useSelector(state => state.movieReducer.error)
    const loading = useSelector(state => state.movieReducer.loading)

    useEffect(() => {
        dispatch(movieAction());
    }, [dispatch]);

    if (error) return <h1 style={{ textAlign: "center", color: "white" }}>Error</h1>
    if (loading) return <h1 style={{ textAlign: "center", color: "white" }}>Loading</h1>
    return (
        <>
            <div className="row mt-5 justify-content-around" >
                {movies.map((movie) => {
                    return <div className="card mt-3 ml-3" style={{ width: "15rem" }} key={movie.id}>
                        <CardContent movie={movie} />
                    </div>
                })}
            </div>
        </>)

}