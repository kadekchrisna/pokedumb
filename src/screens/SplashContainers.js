import { getUserData } from '../actions';
import Splash from './SplashScreen';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isLoggedIn: state.account.isLoggedIn,
    user: state.account.user,
})

const mapDispatchToProps = dispatch => ({
    getUserData: (token) => dispatch(getUserData(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(Splash)