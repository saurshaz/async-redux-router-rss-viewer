import 'whatwg-fetch'
import {
  LOAD_FEED_SUCCESS
} from '../constants'


export function atom (url) {
  return dispatch => {
    // simulate request
    /* eslint-disable */
    feednami.load(url, (result) => {
      dispatch({
        type: LOAD_FEED_SUCCESS,
        payload: { result }
      })
    })
    /* eslint-enable */
  }
}

export function loadFeedSuccess (payload) {
  debugger
  return { type: LOAD_FEED_SUCCESS, result: payload.result }
}
