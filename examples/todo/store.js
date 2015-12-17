/**
 * Imports
 */

import localstorage from 'redux-effects-localstorage'
import location from 'redux-effects-location'
import persist from './middleware/persist'
import events from 'redux-effects-events'
import effects from 'redux-effects'
import logger from 'redux-logger'
import reducer from './reducers'
import client from 'vdux-client'

/**
 * Middleware
 */

const middleware = [
  effects,
  localstorage(window.localStorage),
  events(),
  location(),
  persist,
  logger
]

/**
 * Store
 */

function configureStore (initialState) {
  return client(...middleware)(reducer, initialState)
}

/**
 * Exports
 */

export default configureStore
