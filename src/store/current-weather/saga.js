import { call, put, takeEvery } from 'redux-saga/effects'

import { CurrentWeatherData, CurrentWeatherErr  } from '../current-weather/action';
import { SELECTED_ITEM_WEATHER } from '../search/enums';
import { callAccuweatherApi } from '../../api/accuweather';
import { currentconditions } from '../../library/accuweather';
import {data} from "../../json/current-weather";

export default function* watchFetchApi() {
    yield takeEvery(SELECTED_ITEM_WEATHER, fetchApiAsync);
}

function* fetchApiAsync({ payload }) {

    try {
        const dataApi = yield call(() => {
                return callAccuweatherApi(currentconditions(payload.Key || '215854'))
            }
        );

        if(!dataApi){
            yield put(CurrentWeatherData(data));
            yield put(CurrentWeatherErr(dataApi));
        }else{
            yield put(CurrentWeatherData(dataApi));
        }

    } catch (err) {
        yield put(CurrentWeatherErr(err));
    }
}