import { all, call  } from 'redux-saga/effects'
import unsplashApi from './unsplash/saga'
import autocompleteApi from './autocomplete/saga'
import currentWeatherApi from './current-weather/saga'
import dailyForecastApi from './daily-forecast/saga'

export default function* rootSaga() {

    yield all(
        [
            call(unsplashApi),
            call(autocompleteApi),
            call(currentWeatherApi),
            call(dailyForecastApi),
        ]
    );
}