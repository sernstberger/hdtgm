import { combineReducers } from 'redux';

import resultsReducer from './results-reducer';
import filmReducer from './film-reducer';
import personReducer from './person-reducer';
import contentfulFilmReducer from './contentful-film-reducer';

const rootReducer = combineReducers({
    results: resultsReducer,
    activeFilm: filmReducer,
    personList: personReducer,
    activeContentfulFilm: contentfulFilmReducer,
});

export default rootReducer;