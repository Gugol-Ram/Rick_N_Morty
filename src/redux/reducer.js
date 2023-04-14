//EJE 2.1(12)importar el addfav y removefav creado previamente y agregarlo a switch
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

//EJE 3.1 (12)crear estado inicial con prop myfavorites y comienza como arreglo vacio
//EJE 2.1(13) crear allcharacters como arreglo vacio
const initialState = {
  myFavorites: [],
  allCharactersFav: [],
};
//EJE 3.2.3 y .4(12) crear reducer, y casos add y remove
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharactersFav, action.payload],
        allCharactersFav: [...state.allCharactersFav, action.payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (fav) => fav.id !== action.payload
        ),
      };

    //EJE 2.3(13):filtro personajes, y me quedo con aquellos que su gender sea = a lo que llega en payload
    //EJE EXTRA(13) pequeña modificacion en el return para tenerfiltro de todos los personajes. S¿ME VA A SERVIR PARA EL PI
    case FILTER:
      const allCharactersFiltered = state.allCharactersFav.filter(
        (character) => character.gender === action.payload
      );
      return {
        ...state,
        myFavorites:
          action.payload === "allCharacters"
            ? [...state.allCharactersFav]
            : allCharactersFiltered,
      };
    // case FILTER:
    //   const allCharactersFiltered = state.allCharactersFav.filter(
    //     (character) => character.gender === action.payload
    //   );
    //   return {
    //     ...state,
    //     myFavorites: allCharactersFiltered,
    //   };

    ////EJE 2.4(13): hago una copia del ...state porque es lo que voy a ordenar,no el estado propiamente dicho. en actionpayload estoy haciendo el ocndicional, si A es true se lee la primer linea ( ? ), si A no es true se lee la segunda ( : ), y a.id- b.id va comparando y reordenando
    case ORDER:
      const allCharactersFavCopy = [...state.allCharactersFav];
      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
            : allCharactersFavCopy.sort((a, b) => b.id - a.id),
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;

//en el REMOVE FAV voy filtrando todos los personajes por el id y me qeudo con todos MENOS con el id que me mandarian por payload

// //EJE 2.1(12)importar el addfav y removefav creado previamente y agregarlo a switch
// import { ADD_FAV, REMOVE_FAV } from "./action-types";

// //EJE 3.1 (12)crear estado inicial con prop favoritos y comienza como arreglo vacio
// const initialState = {
//   myFavorites: [],
// };
// //EJE 3.2.3 y .4(12) crear reducer, y casos add y remove
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_FAV:
//       return {
//         ...state,
//         myFavorites: [...state.myFavorites, action.payload],
//       };

//     case REMOVE_FAV:
//       return {
//         ...state,
//         myFavorites: state.myFavorites.filter(
//           (characters) => characters.id !== action.payload
//         ),
//       };

//     default:
//       return {
//         ...state,
//       };
//   }
// };

// export default reducer;

// //en el REMOVE FAV voy filtrando todos los personajes por el id y me qeudo con todos MENOS con el id que me mandarian por payload
