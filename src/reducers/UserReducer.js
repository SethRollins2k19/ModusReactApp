const UserReducer = (state={
    name: "",
    surname: "",
    email: "",
    orders: [],
    avatar: "",
    isLogin: false,
    error: ''
},action)=>{
    switch (action.type) {
        case "GET_LOGIN":{
            return {
                ...state,
                isLogin: true,
                ...action.user
            }
        }
        case "ERROR_LOGIN": {
            return {
                ...state,
                error: action.error
            }
        }
        default: return state
    }
}
export {UserReducer}