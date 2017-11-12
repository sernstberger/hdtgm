import { combineReducers } from 'redux';

import resultsReducer from './results-reducer';
import filmReducer from './film-reducer';
import personReducer from './person-reducer';

const rootReducer = combineReducers({
    results: resultsReducer,
    activeFilm: filmReducer,
    personList: personReducer
});

export default rootReducer;