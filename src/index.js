import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./container/App/App";
import reportWebVitals from "./reportWebVitals";
import './config/i18n/config';
import { SITE_NAME } from "./config/constant";

const root = ReactDOM.createRoot(document.getElementById("root"));
document.title = SITE_NAME;

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
