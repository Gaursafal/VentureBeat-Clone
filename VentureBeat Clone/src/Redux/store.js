import {createStore, compose, applyMiddleware, combineReducers} from 'redux'

import thunk from 'redux-thunk';
import { machinReducer } from './Machins/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    ai : machinReducer
})

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)