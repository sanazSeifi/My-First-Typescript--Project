import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App";
import "../src/assets/table.css";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={{}}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
