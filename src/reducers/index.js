import { combineReducers } from 'redux'
import { PROFILES_RETRIEVED } from '../actions'

function profiles(state = { ids:[1, 2], profilesById:{1: {description: 'Hello.', roomPreferences: {budget: '$1500', location: 'seattle', moveInDate: '05/02/2017', moveOutDate: '06/02/2017', tags: ['student']},}, 2: {name: 'hello',}, }}, action) {
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
