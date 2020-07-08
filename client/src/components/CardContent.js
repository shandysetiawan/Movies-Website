import React, { } from 'react';
import {
    Link,
} from "react-router-dom";


export default function CardContent(props) {


    return (
        <>
            <img src={"https://image.tmdb.org/t/p/w300/" + props.movie.poster_path} className="card-img-top" alt={props.movie.poster_path}></img>
            <div className="card-body">
                <h5 className="card-title">{props.movie.title}</h5>
                <p className="card-text">{props.movie.overview}</p>
                <Link to={`/movies/${props.movie.id}`}>
                    <button className="btn btn-success">Detail</button>
                    <button className="btn btn-primary" >Add to Favorites</button>
                </Link>
            </div>
        </>)

}
