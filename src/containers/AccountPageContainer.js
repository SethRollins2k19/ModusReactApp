import {connect} from 'react-redux'
import {AccountPage} from "../pages/AccountPage";
import {getLogin} from "../actions/UserAction";


const mapStateToProps = state => {
    const {UserReducer} = state
    return {
        User: {...UserReducer}
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        getLogin: (email,password) => dispatch(getLogin(email,password))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AccountPage)