//EJE 2.1 Y .2(12) crear addfav y removefav
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types"; //EJE 1.1 (13) agregar filter y order

export const addFav = (character) => {
  return { type: ADD_FAV, payload: character };
};
export const removeFav = (id) => {
  return { type: REMOVE_FAV, payload: id };
};

//EJE 1.1 Y .2(13)
export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};
