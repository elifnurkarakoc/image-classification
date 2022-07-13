/** Dependencies */
import { createSelector } from "reselect";

const imageClassificationStateSelector = (state) => state.get("images").toJS();

export const imageLoadingSelector = createSelector(
  imageClassificationStateSelector,
  (imagesState) => imagesState?.imageLoading
);

export const imageConfidencesSelector = createSelector(
  imageClassificationStateSelector,
  (imagesState) => imagesState?.confidences
);

export const imageSuccessSelector = createSelector(
  imageClassificationStateSelector,
  (imagesState) => imagesState?.imageSuccess
);

export const imageResultSelector = createSelector(
  imageClassificationStateSelector,
  (imagesState) => imagesState?.result
);

export default imageClassificationStateSelector;
