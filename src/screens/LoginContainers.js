import { loginUser } from '../actions';
import Login from './LoginScreen';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isLoggedIn: state.account.isLoggedIn,
    user: state.account.user,
    isLoading: state.account.isLoading,
})

const mapDispatchToProps = dispatch => ({
    loginUser: (email, password) => dispatch(loginUser(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)