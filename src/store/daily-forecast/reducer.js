import { SEARCH_FORECAST_DATA, ERROR_FORECAST_DATA } from './enums';
import {data} from '../../json/daily-forecast';

let initialState = { forecast : data, error : {} };

export default (state = initialState, action) => {

    switch (action.type) {
        case SEARCH_FORECAST_DATA:
            return {
                ...state,
                forecast: action.payload
            };

        case ERROR_FORECAST_DATA:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};
