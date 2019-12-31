import { call, put, takeEvery } from 'redux-saga/effects'

import { forecastData, forecastErr  } from '../daily-forecast/action';
import { SELECTED_ITEM_WEATHER } from '../search/enums';
import { callAccuweatherApi } from '../../api/accuweather';
import { daily } from '../../library/accuweather';
import { data } from '../../json/daily-forecast';

export default function* watchFetchApi() {
    yield takeEvery(SELECTED_ITEM_WEATHER, fetchApiAsync);
}

function* fetchApiAsync({ payload }) {

    try {

        const dataApi = yield call(() => {
                return callAccuweatherApi(daily(payload.Key))
            }
        );

        if(!dataApi){
            yield put(forecastData(data));
            yield put(forecastErr(dataApi))
        }else{
            yield put(forecastData(dataApi));
        }

    } catch (err) {
        yield put(forecastErr(err));
    }
}