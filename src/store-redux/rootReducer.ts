import { combineReducers } from "redux";
import colorModeSlice from "./color-mode/colorModeSlice";

const rootReducer = combineReducers({
    colorMode: colorModeSlice,
})

export default rootReducer