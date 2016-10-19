import * as constants from '../constants'
import createReducer from '../utils/create-reducer'

const initialState = {
  url:''
}

const actionHandlers = {
  [constants.LOAD_FEED_SUCCESS]: (state, action) =>
      ({ result: action.payload }),
}

export default createReducer(initialState, actionHandlers)
