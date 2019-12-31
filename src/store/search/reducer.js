import { SEARCH_QUERY, SELECTED_ITEM_WEATHER } from './enums';

import { item } from '../../json/selected-item';

let initialState = { searchQuery: '', selectedItem: item};

export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload
            };
        case SELECTED_ITEM_WEATHER:
            return {
                ...state,
                selectedItem: action.payload
            };
        default:
            return state;
    }
};
