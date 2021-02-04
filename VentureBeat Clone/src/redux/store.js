import { createStore, applyMiddleware ,combineReducers} from "redux";
import Googlereducer  from "./LoginRedux/reducer.js";
import Jobsreducer from "./JobsRedux/reducer.js"
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

const rootReducer=combineReducers({
  google:Googlereducer,
  jobs:Jobsreducer
})
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);