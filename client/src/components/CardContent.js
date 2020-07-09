import React, { } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { Favaction } from '../store/actions/Favaction'


export default function CardContent(props) {

    const dispatch = useDispatch()

    function addFavorite(data) {

        dispatch(Favaction(data))
        // console.log("di add favsss", data)
    }


    return (
        <>
            <img src={"https://image.tmdb.org/t/p/w300/" + props.movie.poster_path} className="card-img-top" alt={props.movie.poster_path}></img>
            <div className="card-body">
                <h5 className="card-title">{props.movie.title}</h5>
                <p className="card-text">{props.movie.overview}</p>
                <Link to={`/movies/${props.movie.id}`}>
                    <button className="btn btn-success mr-3">Detail</button>
                </Link>
                <button className="btn btn-danger" onClick={() => addFavorite(props.movie)}><i className="fas fa-heart"></i></button>
            </div>
        </>)

}

