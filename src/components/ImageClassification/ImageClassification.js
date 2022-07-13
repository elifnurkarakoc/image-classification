/** Dependencies */
import { useId, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

/** Store */
import { getResult } from "store/api";
import {
  imageConfidencesSelector,
  imageLoadingSelector,
  imageResultSelector,
} from "store/selectors";

/** Utils */
import { convertBase64 } from "utils/helper";

/** Stylesheets */
import "./ImageClassification.scss";

export const ImageClassification = ({
  getResult,
  confidences,
  result,
  isLoading,
}) => {
  const keyId = useId();
  const [file, setFile] = useState();

  const imageConventer = async (value) => {
    const result = await convertBase64(value);
    return result;
  };

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e?.target?.files[0]));

    imageConventer(e?.target?.files[0]).then((res) => getResult(res));
  };

  return (
    <div className="container">
      <h2 className="titleHolder">Image Classification </h2>
      <div className="imageInputResultHolder">
        <div className="imageInputHolder">
          <h3>Input Image</h3>
          <img src={file} alt="" />
          <input className="" type="file" onChange={handleChange} />
        </div>
        <div className="resultHolder">
          <h3>Classification</h3>
          {!isLoading && (
            <>
              <h4 className="result">{result && <>Result: {result}</>}</h4>
              {confidences?.map((item) => (
                <div className="rowHolder" key={`${item?.label}-${keyId}`}>
                  <div className="rowLabel">
                    <b>{item?.label}</b>
                  </div>
                  <div className="rowNumber">
                    <progress
                      max="100"
                      value={Number(item?.confidence * 100).toFixed(2)}
                    >
                      {Number(item?.confidence * 100).toFixed(2)}%
                    </progress>
                  </div>
                </div>
              ))}
            </>
          )}
          {isLoading && <div>Loading...</div>}
        </div>
      </div>
    </div>
  );
};

export const mapDispatchToProps = (dispatch) => ({
  getResult: (obj) => dispatch(getResult(obj)),
});

export const mapStateToProps = createStructuredSelector({
  confidences: imageConfidencesSelector,
  result: imageResultSelector,
  isLoading: imageLoadingSelector,
});

ImageClassification.propTypes = {
  getResult: PropTypes.func.isRequired,
  confidences: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  result: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
ImageClassification.defaultProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageClassification);
