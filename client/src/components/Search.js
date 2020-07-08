import React, { useState, useEffect } from 'react';
import useFetch from "../services/hooks/useFetch"

export default function Search(props) {
    const [genres, setGenres] = useState([])
    const [inputGenre, setInputGenre] = useState("")
    const { data } = useFetch("https://api.themoviedb.org/3/genre/movie/list?api_key=27ea68148715a4e935cbcfa892205b77&language=en-US")

    useEffect(() => {
        if (data.genres) {
            setGenres(data.genres)
        }
    }, [data])


    function inputCategory() {
        // alert(inputGenre)
        // console.log(inputGenre)

        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=27ea68148715a4e935cbcfa892205b77&language=en-US&with_genres=${inputGenre}`)
            .then((response) => {
                // console.log(response)
                return response.json()
            })
            .then((data) => {
                // console.log(">>>>>", data.results[0].id)
                // setMovies(data.results)
                props.setMovies(data.results)
            })
            .catch((err) => {
                console.log(err)
            });
    }

    function getInput(event) {
        // console.log(event)
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
