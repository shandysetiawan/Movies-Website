
export function movieAction() {
    return (dispatch) => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=27ea68148715a4e935cbcfa892205b77&language=en-US")
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: "SET_MOVIES",
                    payload: { fetchMovies: data.results }
                })
            })
            .catch(err => {
                dispatch({
                    type: "SET_MOVIES",
                    payload: { error: err }
                })
            })
    }

}


export function movieGenre(inputGenre) {
    return (dispatch) => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=27ea68148715a4e935cbcfa892205b77&language=en-US&with_genres=${inputGenre}`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: "SET_MOVIES",
                    payload: { fetchMovies: data.results }
                })
            })
            .catch(err => {
                dispatch({
                    type: "SET_MOVIES",
                    payload: { error: err }
                })
            })
    }

}