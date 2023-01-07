import { combineReducers } from "redux";
import colorModeSlice from "./color-mode/colorModeSlice";
import previewImageSlice from "./preview-img/previewImageSlice";
import promptSlice from "./prompt/promptSlice";

const rootReducer = combineReducers({
    colorMode: colorModeSlice,
    prompt: promptSlice,
    previewImages: previewImageSlice
})

export default rootReducer