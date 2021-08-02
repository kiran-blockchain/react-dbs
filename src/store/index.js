
import { combineReducers } from "redux";
import countReducer from "./increment";
import multiplier from "./multiplier";
import {countriesList} from './countries';
export const rootReducer = combineReducers(
    {
        countReducer,
        multiplier,
        countriesList
    }
)