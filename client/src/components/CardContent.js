import React, { } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { favAction } from '../store/actions/favAction'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'


export default function CardContent(props) {

    const movies = useSelector(state => state.favReducer.favs)

    const dispatch = useDispatch()

    function addFavorite(data) {

        const found = movies.find(element => element.id === data.id)

        if (found) {
            Swal.fire('OOPS...', 'You already add this movie to your favorite!', 'warning')

        } else {
            dispatch(favAction(data))

            Swal.fire('Success!', 'Success added movie to My Favorites', 'success')
        }

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

