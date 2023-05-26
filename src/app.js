const express = require("express");
const server = express();
const router = require("./routes/index");
const morgan = require("morgan");

server.use(express.json()); //EJE 6.3(express)
server.use(morgan("dev"));

//EJE 6.2(express) MIDDLEWARES
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//EJE 6.4(express) otro middleware
server.use("/rickandmorty", router); //cuando hagan una peticion a esa url, busca en el archivo router lo que sea que le llegue(delete,post etc)

module.exports = server;

// server.listen(PORT, () => {
//   console.log(`Server raised in port: ${PORT}`);
// });
//todo esto se va en la homeqork de express
//
//
//
//
//
//
//homework de async await???
// const http = require("http");
// const characters = require("./utils/data");
// // const { getCharById } = require("./controllers/getCharById");

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     if (req.url.includes("/rickandmorty/character")) {
//       const id = req.url.split("/").at(-1);
//       let charactersFind = characters.find((char) => char.id === Number(id));
//       // getCharById(res, +id);
//       return res
//         .writeHead(200, { "Content-type": "application/json" })
//         .end(JSON.stringify(charactersFind));
//     }
//   })
//   .listen(PORT, () => {
//     console.log(`Listening on port: ${PORT}`);
//   });
//
//
//
//
//
//
// PARA EL THUNDER
// http://[::1]:3001/rickandmorty/character/2

// if (req.url.includes("/rickandmorty/character")) {
//   const id = req.url.split("/").at(-1);

//   const characterFound = data.find((character) => character.id === +id);

//   res
//     .writeHead(200, { "Content-type": "application/json" })
//     .end(JSON.stringify(characterFound));
// }

//siempre es 200?
