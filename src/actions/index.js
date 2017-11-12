import axios from 'axios';

export const FETCH_POPULAR = 'fetch_popular';
export const FETCH_MOVIE = 'fetch_movie';
export const SEARCH = 'search';
export const FETCH_PERSON = 'fetch_person';
export const CLEAR_MOVIE = 'clear_movie'

const API_KEY = "0937832cbf3fd4650f903d91d96dec31";

export function fetchPopular() {
    const request = axios.get(`https://api.themoviedb.org/3/list/38134?api_key=${API_KEY}`);
    return {
        type: FETCH_POPULAR,
        payload: request
    }
}

export function searchDatabase(term) {
    // This request will search for the term provided
    const request = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="${term}"`);
    return {
        type: SEARCH,
        payload: request
    }
}

export function fetchMovie(id) {
    // This request will fetch the movie based on the id given
    const request = axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=credits,videos,recommendations,release_dates`);
    return {
        type: FETCH_MOVIE,
        payload: request
    }
}

export function fetchPerson(id) {
    const request = axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}`);
    return {
        type: FETCH_PERSON,
        payload: request
    }
}

export function clearMovie(){
    return {
        type: CLEAR_MOVIE,
        payload: null
    }
}