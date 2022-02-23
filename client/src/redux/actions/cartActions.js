import axios from 'axios'
import * as actionTypes from '../constants/cartConstants'

const url = ''
export const addToCart = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/product/${id}`)
        dispatch({ type: actionTypes.ADD_TO_CART, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const removeFromCart = (id) => async (dispatch) => {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id })
}