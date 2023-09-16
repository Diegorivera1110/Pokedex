export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const fetchPokemonSuccess = (pokemonData) => ({
    type: FETCH_POKEMON_SUCCESS,
    payload: pokemonData,
})

export const openModal = (content) => ({
    type: OPEN_MODAL,
    payload: content,
});

export const closeModal = () => ({
    type: CLOSE_MODAL,
});