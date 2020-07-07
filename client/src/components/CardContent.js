import React, { } from 'react';

export default (props) => {

    return (
        <>
            <img src={"https://image.tmdb.org/t/p/w300/" + props.movie.poster_path} className="card-img-top" alt={props.movie.poster_path}></img>
            <div className="card-body">
                <h5 className="card-title">{props.movie.title}</h5>
                <p className="card-text">{props.movie.overview}</p>
            </div>
        </>)

}

