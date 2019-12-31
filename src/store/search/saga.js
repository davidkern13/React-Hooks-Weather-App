import { put, takeLatest } from 'redux-saga/effects'

import { selectedWeaterItem  } from '../unsplash/action';
import { FETCHING_DATA } from '../search/enums';
export default function* watchFetchApi() {
    yield takeLatest(FETCHING_DATA, fetchWeatherItemAsync);
}

function* fetchWeatherItemAsync({ payload }) {
    try {
        yield put(selectedWeaterItem(data));
    } catch (err) {
        yield put(selectedWeaterItem(err));
    }
}