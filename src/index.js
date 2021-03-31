import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//Componenets
import { Account } from "./components/Accounts";
const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Account>
      <App />
    </Account>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
