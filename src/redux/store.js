import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './reducers';

const store = createStore(pokemonReducer);

export default store;