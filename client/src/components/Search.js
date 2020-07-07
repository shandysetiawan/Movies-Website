import React, { useState, useEffect } from 'react';


export default (props) => {
    const [genres, setGenres] = useState([])
    const [inputGenre, setInputGenre] = useState("")



    useEffect(() => {
        fetchGenre()
    }, [])


    function fetchGenre() {
        // fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=27ea68148715a4e935cbcfa892205b77&language=en-US")
        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=27ea68148715a4e935cbcfa892205b77&language=en-US")
            .then((response) => {
                console.log(response)
                return response.json()
            })
            .then((data) => {
                console.log(">>>>>", data)
                setGenres(data.genres)
            })
            .catch((err) => {
                console.log(err)
            });
    };


    function inputCategory() {
        // alert(inputGenre)
        // console.log(inputGenre)

        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=27ea68148715a4e935cbcfa892205b77&language=en-US&with_genres=${inputGenre}`)
            .then((response) => {
                console.log(response)
                return response.json()
            })
            .then((data) => {
                console.log(">>>>>", data)
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
            <select onChange={e => getInput(e)}>
                <option defaultValue>Search by Genre</option>
                {genres.map((genre) => {
                    return <option value={genre.id} key={genre.id} >{genre.name}</option>
                })}
            </select>
            <button type="submit" onClick={inputCategory}>Search</button>
        </>)

}
