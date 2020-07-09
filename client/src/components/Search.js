import React, { useState, useEffect } from 'react';
import useFetch from "../services/hooks/useFetch"
import { useDispatch } from 'react-redux'
import { movieGenre } from '../store/actions/movieAction'

export default function Search() {
    const [genres, setGenres] = useState([])
    const [inputGenre, setInputGenre] = useState("")
    const { data } = useFetch("https://api.themoviedb.org/3/genre/movie/list?api_key=27ea68148715a4e935cbcfa892205b77&language=en-US")

    const dispatch = useDispatch()


    useEffect(() => {
        if (data.genres) {
            setGenres(data.genres)
        }
    }, [data])

    const inputCategory = () => dispatch(movieGenre(inputGenre));


    function getInput(event) {
        setInputGenre(event.target.value)
    }


    return (
        <>
            <select onChange={e => getInput(e)} className="form-control mt-5" style={{ width: "25vw", marginLeft: "30vw" }}>
                <option defaultValue>Search by Genre</option>
                {genres.map((genre) => {
                    return <option value={genre.id} key={genre.id} >{genre.name}</option>
                })}
            </select>
            <button type="button" className="btn btn-warning mt-3" style={{ marginLeft: "39vw" }} onClick={inputCategory}>Search</button>
        </>)



}
