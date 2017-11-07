import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { buzzwords } from './reducers/buzzwords'
import { colors } from './reducers/colors'
import { emojis } from './reducers/emojis'
import { fortunecookies } from './reducers/fortunecookies'
import { starwars } from './reducers/starwars'

export default createStore(
  combineReducers({
    colors, buzzwords, emojis, fortunecookies, starwars
  }),
  applyMiddleware(thunk)
)