/* global __DEVTOOLS__ */
import '../assets/stylesheets/index.css'

import React, { PropTypes } from 'react'
import { Route } from 'react-router'
import { ReduxRouter } from 'redux-router'
import { connect } from 'react-redux'
import configureStore from './utils/configure-store'
import * as storage from './persistence/storage'
import * as components from './components'


const {
  Atom,
  User
} = components

const initialState = {
}

export const store = configureStore(initialState)

function getRootChildren () {
  const rootChildren = renderRoutes()

  if (__DEVTOOLS__) {
    const DevTools = require('./components/DevTools').default
    rootChildren.push(<DevTools key="devtools" />)
  }
  return rootChildren
}

function renderRoutes () {
  return (
    <ReduxRouter>
      <Route path="/feed" component={Atom}>
        <Route path=':url' component={User} />
      </Route>
    </ReduxRouter>
  )
}

class Root extends React.Component {
  static propTypes = {
  };

  render () {
    return (
      <div>{getRootChildren(this.props)}</div>
    )
  }
}

export default connect(({ application }) => ({ application }))(Root)
