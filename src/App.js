import {createStore} from "redux";
import allReducers from "./store/reducers";
import {Provider} from "react-redux";
import MyButtons from "./MyButtons";

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <Provider store={store}>
      <h1>hi</h1>
      <MyButtons />
    </Provider>
  );
}

export default App;
