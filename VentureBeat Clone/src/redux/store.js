import { createStore, applyMiddleware } from "redux";
import Googlereducer  from "./LoginRedux/reducer.js";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

export const store = createStore(
  Googlereducer,
  composeWithDevTools(applyMiddleware(thunk))
);