import {applyMiddleware, createStore} from 'redux'
import rootSaga from './saga'

import loggerMiddleware from '../middleware/logger'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducer'

//import monitorReducersEnhancer from '../enhancers/monitorReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

export function initialStore(){
    const middleware = [sagaMiddleware,loggerMiddleware];
    const middlewareEnhancer = applyMiddleware(...middleware);

    const enhancers = [middlewareEnhancer]; //monitorReducersEnhancer
    const composedEnhancers = composeWithDevTools(...enhancers);

    const store = createStore(rootReducer, composedEnhancers);

    sagaMiddleware.run(rootSaga);

    return store;
}
