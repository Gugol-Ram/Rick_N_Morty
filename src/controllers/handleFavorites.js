let myFavorites = [];

const postFav = (req, res) => {
  const character = req.body;

  myFavorites.push(character);

  return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;

  const characterFiltered = myFavorites.filter(
    (favorite) => favorite.id !== Number(id)
  ); //id le puedo poner Number(id) o +id para parsear de string a numero. si no anda el quitar fav quito el parseo

  return res.status(200).json(characterFiltered);
};

module.exports = {
  postFav,
  deleteFav,
};
