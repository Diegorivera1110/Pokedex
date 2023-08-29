export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';

export const fetchPokemonSuccess = (pokemonData) => ({
    type: FETCH_POKEMON_SUCCESS,
    payload: pokemonData,
})