import {connect} from "react-redux"
import HeaderComponent from "../component/HeaderComponent";


const mapToStateProps = state => {
    const {UserReducer} = state
    return {
        isLogin: UserReducer.isLogin,
        userName: UserReducer.name
    }
}


export default connect(mapToStateProps)(HeaderComponent)