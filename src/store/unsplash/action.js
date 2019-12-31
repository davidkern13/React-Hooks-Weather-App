import { FETCHING_DATA, SEARCH_UNSPLASH_DATA, ERROR_UNSPLASH_DATA } from './enums';

export const requestApi = () => {
    return { type: FETCHING_DATA }
};

export const unsplashData = data => ({
    type: SEARCH_UNSPLASH_DATA,
    payload: data
})

export const unsplashErr = err => ({
    type: ERROR_UNSPLASH_DATA,
    payload: err
})