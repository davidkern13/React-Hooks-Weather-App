import { FETCHING_CURRENT_WEATHER_DATA, SEARCH_CURRENT_WEATHER_DATA, ERROR_CURRENT_WEATHER_DATA, CELSIUS_CURRENT_WEATHER_DATA } from './enums';

export const requestCurrentWeatherApi = () => {
    return { type: FETCHING_CURRENT_WEATHER_DATA }
};

export const CurrentWeatherData = data => ({
    type: SEARCH_CURRENT_WEATHER_DATA,
    payload: data
})

export const CurrentWeatherErr = err => ({
    type: ERROR_CURRENT_WEATHER_DATA,
    payload: err
})

export const CurrentWeatherCelsius = data => ({
    type: CELSIUS_CURRENT_WEATHER_DATA,
    payload: data
})