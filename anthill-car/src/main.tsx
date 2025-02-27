import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {store} from "./app/store";
import { AuthProvider } from "./context/AuthContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
