import { Provider } from "react-redux";
import HomePage from "./Pages/HomePage";
import { store } from "./Redux/store";
import "./App.css"

function App() {
  return (
    <div>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </div>
  );
}

export default App;
