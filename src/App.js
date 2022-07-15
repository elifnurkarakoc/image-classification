/** Dependencies */
import { Provider } from "react-redux";
import { lazy } from "react";

/** Stores */
import store from "store/store";

/** Components */
const ImageClassification = lazy(() =>
  import("components/ImageClassification/ImageClassification")
);

function App() {
  return (
    <Provider store={store}>
      <ImageClassification />
    </Provider>
  );
}

export default App;
