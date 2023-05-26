const URL = "https://rickandmortyapi.com/api/character";
const axios = require("axios");

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}/${id}`);

    // if (!data.name) throw new Error(`ID: ${id} Not found`);

    const character = {
      id: data.id,
      name: data.name,
      species: data.species,
      origin: data.origin,
      image: data.image,
      gender: data.gender,
      status: data.status,
    };

    return res.status(200).json(character);

    //  return character.name ? res.json(character).status(200) : res.status(404).send('Not Found')
    // return res.status(404).send("Not found")

    //con catch evaluamos el error que estamos recibiendo por parametro. por lo general los errores son un objeto, por eso tienen porpiedad message
  } catch (error) {
    //message es una PROPIEDAD del objeto error, ahi es donde recibimos el mesajde de error (valga la redundancia) es la string que empieza en ID: ..
    return error.message.includes("ID") //pregunto si incluye ID
      ? res.status(404).send(error.message) //si es true retorno 404
      : res.status(500).send(error.response.data.error); //si es false retorno 500
  }
};

//se va en la home de async
// const URL = "https://rickandmortyapi.com/api/character";
// const axios = require("axios");

// const getCharById = (req, res) => {
//   const { id } = req.params;

//   axios(`${URL}/${id}`)
//     .then((response) => response.data)
//     .then(({ status, name, species, origin, image, gender }) => {
//       if (name) {
//         const character = {
//           id,
//           name,
//           species,
//           origin,
//           image,
//           gender,
//           status,
//         };

//         return res.status(200).json(character);
//       }

//       return res.status(404).send("Not found");
//     })
//     .catch((error) => res.status(500).send(error.message));
// };

//SE VA EN LA HOME DE EXPRESS
// const axios = require("axios");

// const getCharById = (response, id) => {
//   axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => response.data) //successHandler
//     .then(({ name, gender, species, origin, image, status }) => {
//       const character = {
//         id,
//         name,
//         gender,
//         species,
//         origin,
//         image,
//         status,
//       };

//       return response
//         .writeHead(200, { "Content-type": "application/json" })
//         .end(JSON.stringify(character));
//     })
//     .catch((error) => {
//       return response
//         .writeHead(500, { "Content-type": "text/plain" })
//         .end(error.message);
//     });
// };

module.exports = {
  getCharById,
};
