//EJE 2.1(12)importar el addfav y removefav creado previamente y agregarlo a switch
import { ADD_FAV, REMOVE_FAV } from "./action-types";

//EJE 3.1 (12)crear estado inicial con prop favoritos y comienza como arreglo vacio
const initialState = {
  myFavorites: [],
};
//EJE 3.2.3 y .4(12) crear reducer, y casos add y remove
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (characters) => characters.id !== action.payload
        ),
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;

//en el REMOVE FAV voy filtrando todos los personajes por el id y me qeudo con todos MENOS con el id que me mandarian por payload
