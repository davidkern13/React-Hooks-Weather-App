import { combineReducers } from 'redux';

import themeReducer from './theme/reducer';
import searchReducer from './search/reducer';
import unsplashReducer from './unsplash/reducer';
import autocompleteReducer from './autocomplete/reducer';
import favoriteReducer from './favorite/reducer';
import dailyForecastReducer from './daily-forecast/reducer';
import currentWeatherReducer from './current-weather/reducer';

const rootReducer = combineReducers({
    theme: themeReducer,
    search: searchReducer,
    unsplash: unsplashReducer,
    autocomplete: autocompleteReducer,
    favorite : favoriteReducer,
    daily: dailyForecastReducer,
    currentWeather: currentWeatherReducer
});

export default rootReducer;
