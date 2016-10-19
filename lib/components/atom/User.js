import React, { PropTypes } from 'react'
import { fetchOnUpdate } from '../../decorators'
import FeedScreen from './FeedScreen'

class User extends React.Component {

  static propTypes = {
    actions: PropTypes.object,
    atom: PropTypes.object
  };

  render () {
    const { atom: {  result } } = this.props
    let feedData = (<label> nothing here </label>)
    /* eslint-disable */
    if (result && result.result && result.result.feed && result.result.feed.entries){
        feedData = ( <FeedScreen feed={result && result.result && result.result.feed } /> )
    }
    /* eslint-ensable */


    return (
      <div>
        <div className="stargazers">
          {feedData}
        </div>
      </div>
    )
  }
}

export default fetchOnUpdate(['url'], (params, actions) => {
  const { url } = params
  if (url)
    actions.atom(decodeURIComponent(url))
})(User)
