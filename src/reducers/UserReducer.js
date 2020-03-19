const UserReducer = (state={
    name: '',
    surname: '',
    email: '',
    orders: [],
    avatar: '',
    isLogin: false,
    error: '',
    isCreated: false
},action)=>{
    switch (action.type) {
        case "GET_LOGIN":{
            return {
                ...state,
                isLogin: true,
                error: "",
                ...action.user
            }
        }
        case "ERROR": {
            return {
                ...state,
                error: action.error
            }
        }
        case "REGISTERED": {
            return {
                ...state,
                error: "",
                isCreated: true,
            }
        }
        case "LOGOUT": {
            return {
                name: '',
                surname: '',
                email: '',
                orders: [],
                avatar: '',
                isLogin: false,
                error: ''
            }
        }
        default: return state
    }
}
export {UserReducer}