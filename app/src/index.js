import React from 'react'
import { render } from 'react-dom'
import 'tachyons'

import App from './App'
import { Provider } from 'react-redux'
import store from './store'

import { setBuzzwords } from './action-creators/buzzwords'
import { setColors } from './action-creators/colors'
import { setEmojis } from './action-creators/emojis'
import { setFortuneCookies } from './action-creators/fortunecookies'
import { setStarwars } from './action-creators/starwars'

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
)

// we can also initialize our lists here:
store.dispatch(setBuzzwords)
store.dispatch(setColors)   // Q: Why do I need to init these but not those below? Why does StarWars barf when I init it?
store.dispatch(setEmojis)
store.dispatch(setFortuneCookies)
store.dispatch(setStarwars)
