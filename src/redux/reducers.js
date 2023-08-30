import { FETCH_POKEMON_SUCCESS } from "./actions";

const initialState = {
    pokemon: [],
};

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POKEMON_SUCCESS:
            return { ...state, pokemonList: action.payload };
            default:
                return state;
    }
}