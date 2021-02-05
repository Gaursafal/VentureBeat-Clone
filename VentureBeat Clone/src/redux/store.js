import {createStore, compose, applyMiddleware, combineReducers} from 'redux'

import thunk from 'redux-thunk';
import Jobsreducer from './JobsRedux/reducer';
import Googlereducer from './LoginRedux/reducer';
import { machinReducer } from './Machins/reducer';
import { Postreducer } from './PostsRedux/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    post : Postreducer,
    ai : machinReducer,
    google : Googlereducer,
    jobs : Jobsreducer
})

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)