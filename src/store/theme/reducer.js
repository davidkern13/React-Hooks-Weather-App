import { THEME_FEED  } from './enums';
import { getLocalStorageData } from '../../local-db/localstorage';

let initialState = { feed: getLocalStorageData('isDark') || false};

export default (state = initialState, action) => {
    switch (action.type) {
        case THEME_FEED:
            return {
                ...state,
                feed: action.payload
            };
        default:
            return state;
    }
};
