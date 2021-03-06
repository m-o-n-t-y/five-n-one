import fetch from 'isomorphic-fetch'
import { SET_STARWARS } from '../constants'
const url = 'http://localhost:5000/starwarsnames'

export const setStarwars = async (dispatch, getState) => {
    const a = await fetch(url).then(res => res.json())
    dispatch({ type: SET_STARWARS, payload: a })
}

