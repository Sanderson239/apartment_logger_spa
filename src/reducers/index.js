import { combineReducers } from 'redux'
import { PROFILES_RETRIEVED } from '../actions'

function profiles(state = { ids:[1], ProfilesById:{1: {name: 'hi',}} }, action) {
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
