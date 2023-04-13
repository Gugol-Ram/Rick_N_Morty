// import Style from ""
import { Link } from "react-router-dom";
// import { addFav, removeFav } from ""
// import { connect } from "react-redux";
// import { useState, useEffect } from "react";

export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  //hago un destructuring de todos los parametros

  // const [isFav, setIsFav] = useState(false);

  // const handleFavorite = () => {
  //   if (isFav) {
  //     setIsFav(false)
  //     removeFav(id)
  //   }
  // else {//EJE 4.2(R-R)
  //   setIsFav(true)
  //   addFav(id, name, species, gender, image,)
  // }
  // }

  //EJE 4.7 (R-R)
  // useEffect(() => {
  //   myFavorites.forEach((fav) => {
  //     if (fav.id === props.id) {
  //       setIsFav(true);
  //     }
  //   });
  // }, [myFavorites]);

  return (
    <div>
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

//EJE 4.6 (R-R):tambien tengo que agregar myfavorites a la function card arriba
// const mapStateToProps = (state) => {
//   return {
//     myFavorites: state.myFavorites
//   };
// };

//ejer 4 reactredux
//const mapDispatchToProps = (dispatch) => {
// return {
//     addFav: (character) => { dispatch(addFav(character))},
//     removeFav: () => { dispatch(removeFav(id))}
//   }
// }

// export default connect(
//   null,
//   mapDispatchToProps
// )(Card)
