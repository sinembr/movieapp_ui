import {NEW_MOVIES_PENDING,NEW_MOVIES_FULLFILLED,NEW_MOVIES_REJECTED} from '../actions/newMovieActions'

// Create with rxreducer snippet
const initialState = {
  fetching: false,
  fetched: false,
  movies:[],
  error:{}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case NEW_MOVIES_PENDING:
    return { ...state, fetching:true, fetched:false}
    case NEW_MOVIES_FULLFILLED:
    return { ...state, fetching:false, fetched:true,movies:payload }
    case NEW_MOVIES_REJECTED:
    return {...state, fetching:false, fetched:true,error:payload}
  default:
    return state
  }
}
