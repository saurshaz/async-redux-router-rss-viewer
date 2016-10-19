import React, { PropTypes } from 'react'
import classnames from 'classnames'
import DisplayError from './DisplayError'

export default class Application extends React.Component {

  static propTypes = {
    children: PropTypes.any
  };

  constructor (props, context) {
    super(props, context)

    this.handleMenuClick = this.handleMenuClick.bind(this)

    this.state = {
      isMenuActive: false
    }
  }


  render () {
    const { isMenuActive } = this.state
    const activeClass = isMenuActive ? 'active' : ''

    return (
      <div id="layout" className={activeClass}>
        <a href="#menu" id="menuLink"
          className={classnames('menu-link', activeClass)}
          onClick={this.handleMenuClick}>
          <span></span>
        </a>
        <div id="main">
          <DisplayError />
          {/* this will render the child routes */}
          {this.props.children}
        </div>
      </div>
    )
  }
}
