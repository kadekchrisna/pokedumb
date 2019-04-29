import { getAllPokemon, getPokemon } from '../actions';
import Detail from './DetailScreen';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isLoading: state.pokemon.isLoading,
    pokemon: state.pokemon.pokemon,
    category: state.pokemon.pokemon.categories,

})

const mapDispatchToProps = dispatch => ({
    getPokemon: (id) => dispatch(getPokemon(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)