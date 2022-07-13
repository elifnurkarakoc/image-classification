import {
  IMAGE_CLASSIFICATION_LOADING,
  IMAGE_CLASSIFICATION_FAILURE,
  IMAGE_CLASSIFICATION_SUCCESS,
} from "store/constants";

export const imageSuccess = (data) => ({
  type: IMAGE_CLASSIFICATION_SUCCESS,
  data,
});

export const imageLoading = (isLoading) => ({
  type: IMAGE_CLASSIFICATION_LOADING,
  isLoading,
});

export const imageFailure = (error) => ({
  type: IMAGE_CLASSIFICATION_FAILURE,
  error,
});
