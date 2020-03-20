import axios from 'axios'
import {_} from "../util/util";


export const getLogin = (email,password) => dispatch =>{
    axios.post('http://localhost:9000/getLogin',{email,password})
        .then(res => {
            res.data.length !== 0 ? dispatch({
                    type: "GET_LOGIN",
                    user: res.data
                })
                :
                dispatch({
                    type: "ERROR",
                    error: "Incorrect login or password"
                })
        })
}
export const addOrders = (order) => dispatch => {
    axios.post('http://localhost:9000/orderRoom', {...order})
        .then(res => {
            console.log(res.data)
            res.data === "" ?
                dispatch({
                    type: "ADD_ORDER",
                    order: {
                        ...order,
                        shipped: _.toNormalDate(order.shipped),
                        arrived: _.toNormalDate(order.shipped)
                    }
                }) :
                dispatch({
                    type: "ERROR",
                    error: res.data.toString()
                })

        })
}
export const createAccount = (user) => dispatch => {
    axios.post('http://localhost:9000/registerAccount',{user})
        .then((res)=> {
            console.log(res)
             if(res.data.error === false ) {
                dispatch({
                    type: "REGISTERED",
                })
             } else {
                 dispatch({
                     type: "ERROR",
                     error: res.data.message
                 })
             }
        })
}
export const logOut = ()=> dispatch => {
    dispatch({
        type: "LOGOUT"
    })
}