import React, { useEffect } from 'react';
import CardContent from './CardContent'
import useFetch from "../services/hooks/useFetch"

// let baseURL = "https://api.themoviedb.org/3"

export default function Card(props) {
    // const [movies, setMovies] = useState([])

    const { data, loading, error } = useFetch("https://api.themoviedb.org/3/discover/movie?api_key=27ea68148715a4e935cbcfa892205b77&language=en-US")


    useEffect(() => {
        props.setMovies(data.results)
    }, [data])

    // function fetchMovies() {
    //     // fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=27ea68148715a4e935cbcfa892205b77&language=en-US")
    //     // fetch("https://api.themoviedb.org/3/discover/movie?api_key=27ea68148715a4e935cbcfa892205b77&language=en-US&with_genres=28")
    //     fetch("https://api.themoviedb.org/3/discover/movie?api_key=27ea68148715a4e935cbcfa892205b77&language=en-US")
    //         .then((response) => {
    //             // console.log(response)
    //             return response.json()
    //         })
    //         .then((data) => {
    //             console.log(">>>>>", data)

    //             props.setMovies(data.results)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         });
    // };

    // console.log(props.movies)

    if (loading) return <h1>Loading</h1>
    if (error) return <h1>Error</h1>
    return (
        <>
            <div className="row mt-5 justify-content-around" >
                {props.movies.map((movie) => {
                    return <div className="card mt-3 ml-3" style={{ width: "15rem" }} key={movie.id}>
                        <CardContent movie={movie} />
                    </div>
                })}
            </div>
        </>)

}