import { createStore, combineReducers, applyMiddleware } from 'redux'
import favReducer from './reducers/favReducer'
import movieReducer from './reducers/movieReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const reducer = combineReducers({
    favReducer,
    movieReducer
})

const store = createStore(reducer, applyMiddleware(thunk, logger))

export default store