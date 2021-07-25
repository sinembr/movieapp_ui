import {FETCHED_MOVIES_PENDING,FETCHED_MOVIES_FULFILLED,FETCHED_MOVIES_REJECTED/*FETCHED_MOVIES_ERROR*/} from '../actions/movieActions'

// Create with rxreducer snippet
const initialState = {
  fetching: false,
  fetched: false,
  movies:[],
  error:{}
}

const moviesReducer= (state = initialState, { type, payload }) => {
  switch (type) {
  case FETCHED_MOVIES_PENDING:
    return { ...state, fetching:true, fetched:false}
    case FETCHED_MOVIES_FULFILLED:
    return { ...state, fetching:false, fetched:true,movies:payload }
    case FETCHED_MOVIES_REJECTED:
    return {...state, fetching:false, fetched:true,error:payload}
  /*case FETCHED_MOVIES_ERROR:
    return { ...state, error:payload }*/
  default:
    return state
  }
}
export default moviesReducer;