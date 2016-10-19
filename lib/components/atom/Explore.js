import React, { PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import shallowEqual from 'react-redux/lib/utils/shallowEqual'
import FeedScreen from './FeedScreen'

export default class Explore extends React.Component {

  static propTypes = {
    url: PropTypes.string,
    actions: PropTypes.object.isRequired,
    atom: PropTypes.object.isRequired,
    params: PropTypes.shape({
      url: PropTypes.string
    })
  };

  static contextTypes = {
    history: PropTypes.object.isRequired
  };

  constructor (props) {
    super(props)

    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleGoClick = this.handleGoClick.bind(this)
    this.getInputValue = this.getInputValue.bind(this)

    // State that depends on props is often an anti-pattern, but in our case
    // that's what we need to we can update the input both in response to route
    // change and in response to user typing.
    this.state = {
      url: props.url
    }
  }

  componentWillReceiveProps (nextProps) {
    if (!shallowEqual(this.props.params, nextProps.params))
      this.setState({
        url: nextProps.params.url
      })
  }

  renderFeed () {
    if (this.props.atom.result &&
     this.props.atom.result.result && this.props.atom.result.result.feed
      && this.props.atom.result.result.feed.entries)
      return ( <FeedScreen feed={this.props.atom.result.result.feed} />)
    else
      return (<div className="stargazers"> nothing to show ... </div>)
  }

  render () {
    return (
      <div className="content">
        <form className="explore pure-form" onSubmit={e => e.preventDefault()}>
          <fieldset>
            <legend> Put Atom Feed URL below and hit Go  </legend>
            <input
              size="45"
              ref="url"
              onKeyUp={this.handleKeyUp}
              onChange={this.handleOnChange}
              value={decodeURIComponent(this.state.url)}
              placeholder="Enter the URL" />
            <button type="submit" className="pure-button pure-button-primary"
              onClick={this.handleGoClick}>
              Go!
            </button>
          </fieldset>
        </form>
      </div>
    )
  }

  handleKeyUp (e) {
    if (e.keyCode === 13)
      this.handleGoClick()
  }

  handleOnChange () {
    // Update the internal state because we are using a controlled input.
    // This way we can update it *both* in response to user input *and*
    // in response to navigation in `componentWillReceiveProps`.
    this.setState({
      url: this.getInputValue()
    })
  }

  handleGoClick () {
    this.props.actions.atom(this.getInputValue())
    this.context.history.pushState(
    {}, `/feed/${encodeURIComponent(this.getInputValue())}`)
  }

  getInputValue () {
    return findDOMNode(this.refs.url).value
  }
}
