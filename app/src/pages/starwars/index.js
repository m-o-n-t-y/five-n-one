import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'

const li = o => {
    return (
        <li key={o.id} style={{ fontSize: 200/o.value.length }}>
            {o.name}
        </li>
    )
}

const Items = props => {
    return (
        <div>
            <h1>Star Wars Names</h1>
            <ul>{map(li, props.starwars)}</ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { starwars: state.starwars }
}

//const connector = connect(mapStateToProps)
//export default connector(Items)
export default connect(mapStateToProps)(Items)
