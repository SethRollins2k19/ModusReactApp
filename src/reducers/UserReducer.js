const UserReducer = (state={
    name: "123@mail.ru",
    surname: "1234",
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
        case "LOGOUT": {
            return {
                name: "",
                surname: "",
                email: "",
                orders: [],
                avatar: "",
                isLogin: false,
                error: ''
            }
        }
        default: return state
    }
}
export {UserReducer}