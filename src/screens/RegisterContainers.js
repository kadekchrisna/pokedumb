import { registerUser } from '../actions';
import Register from './RegisterScreen';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isLoggedIn: state.account.isLoggedIn,
    isLoading: state.account.isLoading,
})

const mapDispatchToProps = dispatch => ({
    registerUser: (username, email, password) => dispatch(registerUser(username, email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
