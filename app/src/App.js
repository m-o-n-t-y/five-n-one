import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Colors from './pages/colors'
import Buzzwords from './pages/buzzwords'
import Starwars from './pages/starwars'
import FortuneCookies from './pages/fortunecookies'
import Emojis from './pages/emojis'

const Menu = props => {
  return (
    <div>
      <h1>Five in One</h1>
      <ul>
        <li>
          <Link to="/colors">Colors</Link>
        </li>
        <li>
          <Link to="/buzzwords">BuzzWords</Link>
        </li>
        <li>
          <Link to="/starwars">Star Wars Names</Link>
        </li>
        <li>
          <Link to="/fortunecookies">Fortune Cookie Fortunes</Link>
        </li>
        <li>
          <Link to="/emojis">Emojis</Link>
        </li>
      </ul>
    </div>
  )
}

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route path="/colors" component={Colors} />
          <Route path="/buzzwords" component={Buzzwords} />
          <Route path="/starwars" component={Starwars} />
          <Route path="/fortunecookies" component={FortuneCookies} />
          <Route path="/emojis" component={Emojis} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App