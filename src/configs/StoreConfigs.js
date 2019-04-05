import {applyMiddleware, createStore, compose} from "redux";
import thunk from "redux-thunk";
import  { createLogger } from 'redux-logger';
import { RootReducer } from "../reducers/index";

const logger = createLogger();

let store = createStore(RootReducer, compose(applyMiddleware(thunk,logger)));

export default store