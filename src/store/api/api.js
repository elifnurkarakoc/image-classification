/** Services */
import Service from "services/service";

/** Store */
import { imageLoading, imageFailure, imageSuccess } from "store/actions";

export const getResult = (obj) => async (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(imageLoading(true));

    Service.fetchData(obj)
      .then((res) => {
        if (res?.data) {
          dispatch(imageSuccess(res?.data));

          resolve();
        } else {
          dispatch(imageFailure());
          reject();
        }
      })
      .catch(() => {
        reject();
      });
  });
};

export default getResult;
