import fetch from 'isomorphic-fetch'
import { SET_FORTUNECOOKIES } from '../constants'
const url = 'http://localhost:5000/fortunecookies'

export const setFortuneCookies = async (dispatch, getState) => {
    const a = await fetch(url).then(res => res.json())
    dispatch({ type: SET_FORTUNECOOKIES, payload: a })
}

