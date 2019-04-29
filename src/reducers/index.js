import { combineReducers } from 'redux';

import account from './AccountReducers'
import pokemon from './PokemonReducers'

export default combineReducers({account, pokemon})
