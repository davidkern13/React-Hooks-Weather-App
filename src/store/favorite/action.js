import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE, UPDATE_FAVORITE } from './enums';

export const updateFavorite = item => ({
    type: UPDATE_FAVORITE,
    payload: item
});

export const setToFavorite = item => ({
    type: ADD_TO_FAVORITE,
    payload: item
});

export const removeFromFavorite = item => ({
    type: REMOVE_FROM_FAVORITE,
    payload: item
});