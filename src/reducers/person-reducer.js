import { FETCH_PERSON, CLEAR_MOVIE } from'../actions';

export default function(state = {}, action) {
    const data = action.payload;
    switch(action.type) {
        case FETCH_PERSON:      
            return { data: data.data }
        case CLEAR_MOVIE:
            return { data: {}}
        default:
            return state;
    }
}