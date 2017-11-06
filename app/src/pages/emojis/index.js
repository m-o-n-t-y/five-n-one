import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

const li = o => {
    return (
        <li key={o.id} style={{ fontSize: 100/o.value.length }}>
            {o.value}
        </li>
    )
}

function Items(props, context) {
    const instance = new React.Component(props, context)
    instance.state = {
        emojis: []
    }

    fetch('http://localhost:5000/emojis')
        .then(res => res.json())
        .then(items  => instance.setState({ emojis: items }))

    instance.render = function () {
        return (
            <div>
                <h1>Emojis</h1>
                <ul>{map(li, this.state.emojis)}</ul>
            </div>
        )
    }
    return instance
}

export default Items