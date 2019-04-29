import { getAllCategories } from '../actions';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isLoggedIn: state.account.isLoggedIn,
    user: state.account.user,
    // categories: state.category.categories

})

const mapDispatchToProps = dispatch => ({
    // getAllCategories: () => dispatch(getAllCategories()),

})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)