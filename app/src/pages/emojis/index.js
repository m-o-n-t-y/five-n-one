import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'

const li = o => {
    return (
        <li key={o.id} style={{ fontSize: 100/o.value.length }}>
            {o.name}
        </li>
    )
}

const Items = props => {
    return (
        <div>
            <h1>Emojis</h1>
            <ul>{map(li, props.emojis)}</ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { emojis: state.emojis }
}

//const connector = connect(mapStateToProps)
//export default connector(Items)
export default connect(mapStateToProps)(Items)
