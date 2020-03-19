import axios from 'axios'


export const getLogin = (email,password) => dispatch =>{
    axios.post('http://localhost:9000/getLogin',{email,password})
        .then(res => {
            res.data.length !== 0 ? dispatch({
                    type: "GET_LOGIN",
                    user: res.data[0]
                })
                :
                dispatch({
                    type: "ERROR",
                    error: "Incorrect login or password"
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