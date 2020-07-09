const initialState = { movies: [], loading: true, error: "" }


export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_MOVIES":
            return { loading: false, movies: action.payload.fetchMovies, error: action.payload.error }
        default:
            return state

    }


}