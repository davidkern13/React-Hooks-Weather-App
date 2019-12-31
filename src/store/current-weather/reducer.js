import { SEARCH_CURRENT_WEATHER_DATA, ERROR_CURRENT_WEATHER_DATA, CELSIUS_CURRENT_WEATHER_DATA } from './enums';
import {data} from '../../json/current-weather';

let initialState = { data : data || [], celsius : true, error : {} };

export default (state = initialState, action) => {

    switch (action.type) {
        case SEARCH_CURRENT_WEATHER_DATA:
            return {
                ...state,
                data: action.payload
            };

        case ERROR_CURRENT_WEATHER_DATA:
            return {
                ...state,
                error: action.payload
            };
        case CELSIUS_CURRENT_WEATHER_DATA:
            return {
                ...state,
                celsius: action.payload
            };
        default:
            return state;
    }
};
