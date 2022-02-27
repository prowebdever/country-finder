import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import { countryReducer } from './reducer'

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
    countryReducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga);
