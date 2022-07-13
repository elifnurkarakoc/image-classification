/** Dependencies */
import { fromJS } from "immutable";

/** Store */
import {
  IMAGE_CLASSIFICATION_SUCCESS,
  IMAGE_CLASSIFICATION_LOADING,
  IMAGE_CLASSIFICATION_FAILURE,
} from "store/constants";

const initialState = fromJS({
  imageLoading: true,
  imageFailure: null,
  imageSuccess: null,
  confidences: [],
  result: "",
});

export const imageClassificationReducer = (
  state = initialState,
  action = null
) => {
  switch (action?.type) {
    case IMAGE_CLASSIFICATION_LOADING:
      return state.set("imageLoading", fromJS(action?.isLoading));
    case IMAGE_CLASSIFICATION_SUCCESS:
      return state
        .set("imageSuccess", fromJS(true))
        .set("confidences", fromJS(action?.data[0]?.confidences))
        .set("result", fromJS(action?.data[0]?.label))
        .set("imageLoading", fromJS(false));
    case IMAGE_CLASSIFICATION_FAILURE:
      return state
        .set("imageFailure", fromJS(action?.error))
        .set("imageLoading", fromJS(false));
    default:
      return state;
  }
};

export { initialState };
export default imageClassificationReducer;
