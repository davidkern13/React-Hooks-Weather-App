import { call, put, takeEvery } from 'redux-saga/effects'

import { autocompleteData, autocompleteErr  } from '../autocomplete/action';
import { SEARCH_QUERY } from '../search/enums';
import { callAccuweatherApi } from '../../api/accuweather';
import { autocomplete } from '../../library/accuweather';

export default function* watchFetchApi() {
    yield takeEvery(SEARCH_QUERY, fetchApiAsync);
}

function* fetchApiAsync({ payload }) {

    try {
        const data = yield call(() => {
                return callAccuweatherApi(autocomplete(payload))
            }
        );

        yield put(autocompleteData(data));
    } catch (err) {
        yield put(autocompleteErr(err));
    }
}