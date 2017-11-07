import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'

const li = o => {
    return (
        <li key={o.id} style={{ color: o.value }}>
            {o.name}
        </li>
    )
}

const Items = props => {
    return (
        <div>
            <h1>Colors</h1>
            <ul>{map(li, props.colors)}</ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { colors: state.colors }
}

//const connector = connect(mapStateToProps)
//export default connector(Colors)
export default connect(mapStateToProps)(Items)
