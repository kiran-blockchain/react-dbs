import { memoryUsage } from "process";
import { combineReducers } from "redux";
import countReducer from "./increment";
import multiplier from "./multiplier";

export const rootReducer = combineReducers(
    {
        countReducer,
        multiplier
    }
)