import { configureStore, combineReducers } from '@reduxjs/toolkit';
import shared from './shared/reducer';
import films from './films/reducer';
import people from './people/reducer';
import planets from './planets/reducer';
import starships from './starships/reducer';
import vehicles from './vehicles/reducer';
import species from './species/reducer';

export default store = configureStore({
    reducer: combineReducers({
        shared,
        films,
        people,
        planets,
        starships,
        vehicles,
        species,
    }),
})
