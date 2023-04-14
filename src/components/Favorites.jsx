import Card from "./Card"; //EJE 5.4(12) necesito traerme a card para mapear y renderizar el fav
import { connect, useDispatch } from "react-redux"; //EJE 5.3al hacer mapStateToProps tengo que importar el connect; cambia el export default favorites a export default connect(MSTP, null)y lo conecto a (Favorites)
import { filterCards, orderCards } from "../redux/actions"; //EJE 3.3(13) importar las acciones y useDispatch en connect
import { useState } from "react"; //EJE 4(13)

const Favorites = ({ myFavorites }) => {
  //EJE 3.4(13) crear const handleOrder y distpatch
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };
  //EJE 4(13)CREAR ESTADO AUX; setear aux en handleOrder. DESACTIVO AU MIENTRAS TANTO PORQUE NO SE USA EN ESTE EJERCICIO
  const [setAux] = useState(false);

  //EJE 3.5(13)handleFilter
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    //EJE 5.4(12)mapear y traer card y lo que quiero que muestre el favorito. IMPORTANTE usar el condicional '?' para que pregunte si hay algo en myfavorites y entonces mapear, sino lo hay no se hace nada
    //EJE 3.1 Y.2(13) crear etiquetas select
    //EJE 3.6(13):agregar onChange a select
    ////EJE EXTRA(13) AGREGAR UNA OPCION MAS A FILTER y muestre todos los personajes
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
        <option value="allCharacters">All Characters</option>
      </select>
      <br />

      {myFavorites?.map((fav) => {
        return (
          <Card
            key={fav.id}
            id={fav.id}
            name={fav.name}
            species={fav.species}
            gender={fav.gender}
            image={fav.image}
            onClose={fav.onClose}
          />
        );
      })}
    </div>
  );
};

//eje 5.3(12) crear MSTP y traer myFavorites. lo conecto agregando myFavorites a const favorites() que hasta entonces estaba vacia
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
