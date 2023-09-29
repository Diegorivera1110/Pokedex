// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import pokemonReducer from './reducers';

const store = configureStore(pokemonReducer);

export default store;