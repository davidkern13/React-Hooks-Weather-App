import { SEARCH_UNSPLASH_DATA, ERROR_UNSPLASH_DATA } from './enums';

let initialState = { data: []};

export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_UNSPLASH_DATA:
            return {
                ...state,
                data: action.payload
            };

        case ERROR_UNSPLASH_DATA:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
};
