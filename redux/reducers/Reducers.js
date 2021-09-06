import { combineReducers } from "redux";
import YearReducer from "./YearReducer";
import ClassReducer from "./ClassReducer";
const Reducers = combineReducers({
    YearReducer,
    ClassReducer,
})

export default Reducers;