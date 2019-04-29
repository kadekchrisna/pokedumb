import { getAllCategories, getAllType, addPokemon } from '../actions';
import AddPoke from './AddPokemonScreen';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isLoading: state.pokemon.isLoading,
    types: state.pokemon.types,
    categories: state.pokemon.categories
    

})

const mapDispatchToProps = dispatch => ({
    getAllCategories: () => dispatch(getAllCategories()),
    getAllType: () => dispatch(getAllType()),
    addPokemon: (name, image, type, longitude, latitude, category_id, token) => dispatch(addPokemon(name, image, type, longitude, latitude, category_id, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPoke)