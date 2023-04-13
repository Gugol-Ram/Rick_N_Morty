import Card from "./Card"; //EJE 5.4(12) necesito traerme a card para mapear y renderizar el fav
import { connect } from "react-redux"; //EJE 5.3al hacer mapStateToProps tengo que importar el connect; cambia el export default favorites a export default connect(MSTP, null)y lo conecto a (Favorites)
// import { connect } from "react-redux";

const Favorites = ({ myFavorites }) => {
  return (
    //EJE 5.4(12)mapear y traer card y lo que quiero que muestre el favorito. IMPORTANTE usar el condicional '?' para que pregunte si hay algo en myfavorites y entonces mapear, sino lo hay no se hace nada
    <>
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
    </>
  );
};

//eje 5.3(12) crear MSTP y traer myFavorites. lo conecto agregando myFavorites a const favorites() que hasta entonces estaba vacia
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
