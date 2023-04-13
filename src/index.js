import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; //EJE 1(react routes):importo y me traigo el brouter,destructuring. tambien hay que renderizarlo abajito
import { Provider } from "react-redux"; //(EJE REACT REDUX) importo y envuelvo todo el browser router
import store from "./redux/store"; //EJE 1(12) importar store y agregarlo a la etiqueta provider en el render

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
