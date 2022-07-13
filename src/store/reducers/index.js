/** Dependencies */
import { combineReducers } from "redux-immutable";

/** Reducer */
import imageClassificationReducer from "./imageClassificationReducer";

const rootReducer = combineReducers({
  images: imageClassificationReducer,
});

export default rootReducer;
