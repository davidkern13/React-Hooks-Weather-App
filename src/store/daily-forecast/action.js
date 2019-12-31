import { SEARCH_FORECAST_DATA, ERROR_FORECAST_DATA } from './enums';


export const forecastData = data => ({
    type: SEARCH_FORECAST_DATA,
    payload: data
})

export const forecastErr = err => ({
    type: ERROR_FORECAST_DATA,
    payload: err
})