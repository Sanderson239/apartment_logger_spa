import { combineReducers } from 'redux'
import { PROFILES_RETRIEVED } from '../actions'

function profiles(state = { ids:[1, 2], profilesById:{1: {name: 'hi',}, 2: {name: 'hi',}, }}, action) {
  switch (action.type) {
    case PROFILES_RETRIEVED:
    return state;


      default:
        return state
      }
    }

export default combineReducers({
  profiles,
})
