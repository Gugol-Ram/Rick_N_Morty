// import Style from ""
import { Link } from "react-router-dom";
//import { useDispatch } from "react-redux"; //EJE 4.1(12) hago uso de hooks, codereview 34a, no lo uso acá
import { useState, useEffect } from "react"; //EJE 4.3(12) para crear el componente isFav y 4.7 para useeffect
import { addFav, removeFav } from "../redux/actions";
import { connect } from "react-redux";

function Card({
  //hago un destructuring de todos los parametros
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  // const dispatch = useDispatch();code review 34a
  const [isFav, setIsFav] = useState(false); //EJE 4.3(12) destructuring de un array para crear un estado local

  //EJE 4.4(12)
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, status, species, gender, origin, image, onClose });
    }
  };

  //EJE 4.7 (12)importo useEffect junto a useState y copio el codigo dado y le quito el props porque estoy en destructuring.
  //recorre el estado global. si fav id es igual a id entonces setea el fav en true, al lado de myFavorites le agrego el id porque sino se rompe
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);

  return (
    <div>
      {/* EJE 4.5(12)agrego botones fav */}
      <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>

      <button onClick={() => onClose(id)}>X</button>
      {/* eje4.2(r-routes)como el detail tiene que ser variable uso template string(``) */}
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h2>{name}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{status}</h2>
      <h2>{origin}</h2>
      <img src={image} alt="" />
    </div>
  );
}

//EJE 4.6 (12):tambien tengo que agregar myfavorites a la function card arriba
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

//EJE 4.4 (12)
const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

//EJE 4.5(12)agrego botones fav
//  esto es como lo da el readme, pero hacemos version mas simplificada usando un solo button
// {isFav ? (
//   <button onClick={handleFavorite}>❤️</button>
// ) : (
//   <button onClick={handleFavorite}>🤍</button>
// )}
