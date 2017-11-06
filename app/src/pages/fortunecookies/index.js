import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

const li = o => {
    return (
        <li key={o.id} style={{ fontSize: 1000 / o.value.length }}>
            {o.value}
        </li>
    )
}

function Items(props, context) {
    const instance = new React.Component(props, context)
    instance.state = {
        fortuneCookies: []
    }


    fetch('http://localhost:5000/fortunecookies')
    .then(res => res.json())
    .then(items => instance.setState({ fortuneCookies: items }))

    instance.render = function () {
        return (
            <div>
                <h1>Fortune Cookie Fortunes</h1>
                <ul>{map(li, this.state.fortuneCookies)}</ul>
            </div>
        )
    }
    return instance
}

export default Items