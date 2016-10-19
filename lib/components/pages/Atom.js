import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Explore from '../atom/Explore'
import User from '../atom/User'
import * as atomActions from '../../actions/atom'


class Atom extends React.Component {

  static propTypes = {
    children: PropTypes.any,
    actions: PropTypes.object
  };

  render () {

    const {url} = this.props

    return (
      <div>
        <div className="header">
          <h1>Atom Feeds Viewer</h1>
            {text => <h2>{text}</h2>}
        </div>

        <Explore {...this.props} />
        <User {...this.props} />
        {/* this will render the child routes */}
      </div>
    )
  }
}

export default connect(
  ({ atom }) => ({ atom }),
  dispatch => ({ actions: bindActionCreators(atomActions, dispatch) })
)(Atom)
