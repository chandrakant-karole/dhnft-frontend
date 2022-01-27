import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/styles.scss";


import { Provider } from "react-redux";
import { store } from "./redux/storeConfig/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
