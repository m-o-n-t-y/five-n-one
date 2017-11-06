import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

const li = o => {
    return (
        <li key={o.id} style={{ fontSize: 200/o.value.length }}>
            {o.value}
        </li>
    )
}

function Items(props, context) {
    const instance = new React.Component(props, context)
    instance.state = {
        starwars: []
    }

    fetch('http://localhost:5000/starwarsnames')
        .then(res => res.json())
        .then(items  => instance.setState({ starwars: items }))

    instance.render = function () {
        return (
            <div>
                <h1>Star Wars Names</h1>
                <ul>{map(li, this.state.starwars)}</ul>
            </div>
        )
    }
    return instance
}

export default Items