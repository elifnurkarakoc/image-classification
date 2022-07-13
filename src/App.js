/** Dependencies */
import { Provider } from "react-redux";

/** Stores */
import store from "store/store";

/** Components */
import ImageClassification from "components/ImageClassification/ImageClassification";

function App() {
  return (
    <Provider store={store}>
      <ImageClassification />
    </Provider>
  );
}

export default App;
