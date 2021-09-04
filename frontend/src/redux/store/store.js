import {createStore as reduxCreateStore, combineReducers, applyMiddleware} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { UsersReducer } from "../users/reducers";


export default function createStore(history){
    const logger = createLogger({
        collapsed:true,
        diff:true
    });

    return reduxCreateStore(
        combineReducers({
            router:connectRouter(history),
            users:UsersReducer
        }),
        applyMiddleware(
            logger,
            routerMiddleware(history),
            thunk
        )
    )
}