import { createStore } from "redux";
import { reducer } from "./reducer";

export const store = createStore(reducer, [{description: "Test", complete: true}, {description: "test2", complete:false}]);