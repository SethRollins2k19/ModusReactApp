const UserReducer = (state={
    _id: "",
    name: '',
    surname: '',
    email: '',
    orders: '',
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
        case "ADD_ORDER": {
            return {
                ...state,
                orders: [...state.orders,action.order]
            }
        }
        default: return state
    }
}
export {UserReducer}