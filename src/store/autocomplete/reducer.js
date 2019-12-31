import { SEARCH_AUTOCOMPLETE_DATA, ERROR_AUTOCOMPLETE_DATA } from './enums';

let initialState = { data: [] };

export default (state = initialState, action) => {

    switch (action.type) {
        case SEARCH_AUTOCOMPLETE_DATA:
            return {
                ...state,
                data: action.payload
            };

        case ERROR_AUTOCOMPLETE_DATA:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
};
