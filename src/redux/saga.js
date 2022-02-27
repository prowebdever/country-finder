
import { put, call, all, take } from 'redux-saga/effects'
import {eventChannel} from 'redux-saga'
import { fetchCountryData } from 'datasource'
import { getCountryList } from './actions'

function fetchData(alphabet_index) {
    return eventChannel(emitter => {
        const timer = setInterval(async () => {
            let data =  await fetchCountryData(alphabet_index ++);
            emitter(data)
        }, 30000);
        return () => {
          clearInterval(timer)
        }
      }
    )
}

function* saga() {
    const channel = yield call(fetchData, 0)
    try {
        while(true) {
            let data = yield take(channel)
            yield put(getCountryList(data));
        }
    } finally {
    }
}

export default function* rootSaga() {
    yield all([
        saga(),
    ])
}