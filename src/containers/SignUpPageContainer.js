import {connect} from 'react-redux'
import {createAccount} from "../actions/UserAction";
import {SingUpPage} from "../pages/SignUpPage";

const mapStateToProps = state => {
    const {User} = state
    return {
        error: User.error,
        isCreated: User.isCreated
    }
}
const mapDispatchToProps = dispatch => {
    return {
        createAccount: user => dispatch(createAccount({...user}))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SingUpPage)