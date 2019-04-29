import { getAllPokemon } from '../actions';
import Home from './HomeScreen';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isLoading: state.pokemon.isLoading,
    pokemons: state.pokemon.pokemons,
    page: state.pokemon.page

})

const mapDispatchToProps = dispatch => ({
    getAllPokemon: (page) => dispatch(getAllPokemon(page)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)