import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'

const li = o => {
    return (
        <li key={o.id} style={{ fontSize: 1000/o.value.length }}>
            {o.name}
        </li>
    )
}

const Items = props => {
    return (
        <div>
            <h1>Fortune Cookies</h1>
            <ul>{map(li, props.fortunecookies)}</ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { fortunecookies: state.fortunecookies }
}

//const connector = connect(mapStateToProps)
//export default connector(Items)
export default connect(mapStateToProps)(Items)
