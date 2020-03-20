import {connect} from "react-redux"
import {getLogin} from "../actions/UserAction";
import {SignInPage} from "../pages/SignInPage";

const mapStateToProps = state => {
    const {User} = state
    return {
        error: User.error,
        isLogin: User.isLogin
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        getLogin: (email,password) => dispatch(getLogin(email,password))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignInPage)