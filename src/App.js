import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { useState } from "react";
import axios from "axios"; //EJERCICIO 7(CICLOS)agregar axios y quitar onSearch

function App() {
  const [characters, setCharacters] = useState([]);
  //ejrecicio 3:aca estoy creando mi estado, con destructuring con CORCHETES, porque lo que retorna el useState ES UN ARRAY.characters es mi estado, y setChar es mi funcion para setear mi estado.(redundancia)

  //Este onSearch es el nuevo que me dan para reemplazar el anterior que usaba la cosntante(ejer 7 CICLOS)
  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("¡No hay personajes con este ID!");
        }
      });
  };

  //EJERC 8.1.2 y .3 (CICLOS): crear la funcion onClose. characters.filter me rotarna un nuevo array, recibiendo un cb, recorriendo los personajes. y le estoy diciendo que se quede con los personajes que sean DISTINTOS al id que me estan mandando por parametro.
  //agrego Number porque lo que recibe por parametro es un string y de comparacion es numero()
  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(charactersFiltered);
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;

// //ejercicio 2: importo y renderizo <Nav />
// //ejercicio 5: le agrego al renderizado de nav la propiedad de onSearch que cree en el ejercicio 4; ejerc 5.2 lo trabajo sobre Nav.jsx

///////////////////////////////////////////////////

// import "./App.css";
// import Cards from "./components/Cards.jsx";
// import Nav from "./components/Nav";
// import { useState } from "react";

// const example = {
//   id: 1,
//   name: "Rick Sanchez",
//   status: "Alive",
//   species: "Human",
//   gender: "Male",
//   origin: {
//     name: "Earth (C-137)",
//     url: "https://rickandmortyapi.com/api/location/1",
//   },
//   image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
// };

// function App() {
//   const [characters, setCharacters] = useState([]);
//   //ejrecicio 3:aca estoy creando mi estado, con destructuring con CORCHETES, porque lo que retorna el useState ES UN ARRAY.characters es mi estado, y setChar es mi funcion para setear mi estado.(redundancia)

//   const onSearch = () => {
//     //ejerc 4: creacion de la funcion onSearch. 4.2 al estar modificando el estado local: linea setCharacters. la primer parte dice que no agregaremos(de momento) por lo que a modo de ejemplo agregamos un default que será rick(lineas comentadas arriba)
//     setCharacters([...characters, example]);
//     //los 3 puntos son el spread operator:que guarda una copia de la funcion. no puedo usar push porque characters por mas que sea un array, ES UN ESTADO del componente, si hago el push lo vuelvo array puro
//     // axios(`https://rickandmortyapi.com/api/character/${id}`).then(
//     //   ({ data }) => {
//     //     if (data.name) {
//     //       setCharacters((oldChars) => [...oldChars, data]);
//     //     } else {
//     //       window.alert("¡No hay personajes con este ID!");
//     //     }
//     //   }
//     // );
//   };

//   return (
//     <div className="App">
//       <Cards characters={characters} />
//       <Nav onSearch={onSearch} />
//     </div>
//   );
// }

// export default App;
