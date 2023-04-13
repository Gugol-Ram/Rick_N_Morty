//importo el create store
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk"; //confiuracion para que ande la extnsion del navegador?
//importo el reducer; y luego se lo paso a la constante createStore como parametro. el middleware es una funcion que se encuentra entre el cliente y el servidor
import reducer from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose; //permite que nuestra app se conecte con la extension del navegador. siempre es la misma linea. Y se lo paso const store lo de enhacer y middleware

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleware)) // esta linea sirve para que podamos hacer peticiones a una API/SERVER
);

export default store;
