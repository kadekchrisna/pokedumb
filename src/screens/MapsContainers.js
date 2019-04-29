import { getAllPokemon, getAllPokemonMaps } from '../actions';
import Maps from './MapsScreen';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isLoading: state.pokemon.isLoading,
    pokemons: state.pokemon.pokemons

})

const mapDispatchToProps = dispatch => ({
    getAllPokemonMaps: () => dispatch(getAllPokemonMaps()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Maps)