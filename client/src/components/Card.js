import React, { Component } from 'react';
import CardContent from './CardContent'

let baseURL = "https://api.themoviedb.org/3"


class Card extends Component {
    constructor() {
        super()
        this.state = {
            movies: []
        }
    }

    render() {
        return (
            <>
                <div className="row mt-5 justify-content-around">
                    {this.state.movies.map((movie) => {
                        return <div className="card mt-3 ml-3" style={{ width: "18rem" }} key={movie.id}>
                            <CardContent movie={movie} />
                        </div>
                    })}
                </div>
            </>)
    }


    componentDidMount = () => {
        this.fetchMovies()

    };

    fetchMovies() {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=27ea68148715a4e935cbcfa892205b77&language=en-US&page=2")
            .then((response) => {
                console.log(response)
                return response.json()
            })
            .then((data) => {

                console.log(">>>>>", data)

                this.setState({
                    movies: data.results
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }


}

export default Card