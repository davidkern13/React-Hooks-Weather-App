import { FETCHING_AUTOCOMPLETE_DATA, SEARCH_AUTOCOMPLETE_DATA, ERROR_AUTOCOMPLETE_DATA } from './enums';

export const requestAutocompleteApi = () => {
    return { type: FETCHING_AUTOCOMPLETE_DATA }
};

export const autocompleteData = data => ({
    type: SEARCH_AUTOCOMPLETE_DATA,
    payload: data
})

export const autocompleteErr = err => ({
    type: ERROR_AUTOCOMPLETE_DATA,
    payload: err
})