const initialState = { favs: [] }


export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FAV":
            return { ...state, favs: state.favs.concat(action.payload.newMovie) }
        default:
            return state

    }


}
