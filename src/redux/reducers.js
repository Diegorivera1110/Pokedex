import { FETCH_POKEMON_SUCCESS, OPEN_MODAL, CLOSE_MODAL } from "./actions";

import { createStore, combineReducers } from "redux";
import { pokemonReducer, modalReducer } from "./reducers";

const initialState = {
    pokemon: [],
    isOpen: false,
    content: null,
};

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POKEMON_SUCCESS:
            return { ...state, pokemonList: action.payload };
            default:
                return state;
    }
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                isOpen: true,
                content: action.payload,
            };
            case CLOSE_MODAL:
                return initialState;
                default:
                    return state;
    }
};


const rootReducer = combineReducers({
    pokemon: pokemonReducer,
    modal: modalReducer,
});

const store = createStore(rootReducer);

export default store;
