import axios from 'axios'


export const getLogin = (email,password) => dispatch =>{
    console.log({email,password})

    axios.post('http://localhost:9000/getLogin',{email,password})
        .then(res => {
            console.log(res)
            res.data ? dispatch({
                    type: "GET_LOGIN",
                    user: res.data
                })
                :
                dispatch({
                    type: "ERROR_LOGIN",
                    error: "Incorrect login or password"
                })
            console.error()
        })
}