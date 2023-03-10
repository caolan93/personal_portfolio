import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

// Redux
import store from "./store";
import { Provider } from "react-redux";

// React Router DOM
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
