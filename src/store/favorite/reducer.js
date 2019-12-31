import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE, UPDATE_FAVORITE } from './enums';

import { setLocalStorageData,getLocalStorageData, clearDb } from '../../local-db/localstorage';
import { jsonParseData } from '../../utils';

const initialState = { items: jsonParseData(getLocalStorageData('favorite')) || [] };

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITE:

            let localFavoriteData = jsonParseData(getLocalStorageData('favorite')) || [];
            let data = [...localFavoriteData, action.payload];

            setLocalStorageData('favorite', data);

            return {
                ...state,
                items: data

            };
        case REMOVE_FROM_FAVORITE:
            return {
                ...state,
                items: []
            };
        case UPDATE_FAVORITE:

            let updatedData = action.payload.filter(item => item);

            if(updatedData.length > 0){
                clearDb();
                setLocalStorageData('favorite', action.payload);

                return {
                    ...state,
                    items: action.payload

                };
            }

            return {
                ...state
            };

        default:
            return state;
    }
};
