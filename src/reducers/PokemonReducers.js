import { setValue } from '../storage'
const initial = {
    pokemon: {},
    pokemons: {},
    isLoading: false,
    pokeMaps: {},
    temp: [],
    types: {},
    categories: {},
    page: 1,
    tempPokes: {}

}
export default (state = initial, action) => {
    switch (action.type) {
        case 'GET_ALL_POKEMON_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_ALL_POKEMON_FULFILLED':
            Array.prototype.push.apply(state.pokemons, action.payload.data.data)
            // console.log(state.pokemons);

            return {
                ...state,
                pokemons: state.pokemons,
                isLoading: false,
                page: action.payload.data.page,

            }
        case 'ADD_POKEMON_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'ADD_POKEMON_FULFILLED':
            // console.log(state.pokemons);

            return {
                ...state,
                isLoading: false,

            }
        case 'GET_ALL_MAPS_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_ALL_MAPS_FULFILLED':
            // console.log(action.payload.data.pokemons);

            return {
                ...state,
                pokeMaps: action.payload.data.pokemons,
                isLoading: false,

            }
        case 'GET_POKEMON_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_POKEMON_FULFILLED':
            return {
                ...state,
                pokemon: action.payload.data.pokemon,
                isLoading: false
            }
        case 'GET_ALL_CATEGORIES_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_ALL_CATEGORIES_FULFILLED':
            console.log(JSON.stringify(action.payload.data.categories));
            return {
                ...state,
                categories: action.payload.data.categories,
                isLoading: false
            }

        case 'GET_ALL_TYPES_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_ALL_TYPES_FULFILLED':
            console.log(JSON.stringify(action.payload.data.types));

            return {
                ...state,
                types: action.payload.data.types,
                isLoading: false
            }
        default:
            return state;

    }
}
