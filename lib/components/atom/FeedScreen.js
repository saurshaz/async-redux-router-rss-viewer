import React, { PropTypes } from 'react'

export default class FeedScreen extends React.Component {

  static propTypes = {
    feed: PropTypes.object.isRequired
  };

  render () {
    const { feed } = this.props

    return (
      <div className="l-box">
        <div className="stargazers">
          <div className="pure-g">
            {feed.entries.map(f =>
              <div key={f.guid}
                className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4 pure-u-xl-1-6">
                <label> {f.title} -  {f.author} </label>
	              <pre></pre>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
