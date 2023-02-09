import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </RecoilRoot>
);
