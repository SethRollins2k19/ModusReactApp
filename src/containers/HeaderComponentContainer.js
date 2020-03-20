import {connect} from "react-redux"
import HeaderComponent from "../component/HeaderComponent";
import {logOut} from "../actions/UserAction";


const mapToStateProps = state => {
    const {User} = state
    return {
        isLogin: User.isLogin,
        userName: User.name
    }
}

const mapDispatchToState = dispatch =>{
    return {
        logOut: ()=>dispatch(logOut())
    }
}

export default connect(mapToStateProps,mapDispatchToState)(HeaderComponent)