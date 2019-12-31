import { call, put, takeLatest } from 'redux-saga/effects'

import { unsplashData, unsplashErr  } from '../unsplash/action';
import { SELECTED_ITEM_WEATHER } from '../search/enums';
import { callUnsplashApi } from '../../api/unsplash';

export default function* watchFetchApi() {
    yield takeLatest(SELECTED_ITEM_WEATHER, fetchApiAsync);
}

function* fetchApiAsync({ payload }) {

    try {
        const data = yield call(() => {
                return callUnsplashApi(payload.LocalizedName)
            }
        );

        yield put(unsplashData(data));
    } catch (err) {
        yield put(unsplashErr(err));
    }
}