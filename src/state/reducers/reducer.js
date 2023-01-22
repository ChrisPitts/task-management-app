import { combineReducers } from "redux";
import { filter } from "./filter";
import { items } from "./items";

export var reducer = combineReducers({items, filter});