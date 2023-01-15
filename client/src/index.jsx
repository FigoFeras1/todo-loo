import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const AppContext = React.createContext();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContext.Provider value={"undefined"}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContext.Provider>
  </React.StrictMode>
);
