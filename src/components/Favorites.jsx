import Card from "./Card";
import { connect } from "reat-redux";

const Favorites = (myFavorites) => {
  return (
    <>
      {myFavorites.map((fav) => {
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

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect();
