import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import About from "./components/About"; //EJE 3(R-ROUTES) crear ruta de about y render
import Detail from "./components/Detail"; //EJE 3(R-ROUTES) traer ruta detail y render
import { useState, useEffect } from "react"; // EJE 5.3(R-FORMS) importar useEfect.(dato de color segun de donde viene es en que llaves tengo que ir agregandolo,uE es de react por eso viee acá)
import axios from "axios"; //EJERCICIO 7(CICLOS)agregar axios y quitar onSearch
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"; // EJE 1(react routes) agregar este import con Routes y Route; //EJE 2.2(REACT FORMS) agregar a las llaves useLocation para saber donde esta parado el usuario y no mostrar la nav; //EJE 5.2(R-FORMS)importar useNavigate
import Form from "./components/Form"; // EJE 2(REACT FORMS) importar el componente Form
// import Favorites from "./components/Favorites";

const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "5d9cae0b93f7.7c8361b50bac69d75b6e";

//EJE 5.1(R-FORMS): creo las variables email y password para simular la base de datos
const email = "rami@gmail.com";
const password = "1234qwerty";

function App() {
  const location = useLocation(); //EJE 2.2(REACT FORMS) tambien creo la constante para hacer uso del useLocation. agrego location.pathname al return porque la unica propiedad que yo necesito es la ruta en la que esta el usuario. entonces si esa ruta es DISTINTA(!==) a la pag inicial(/) le retorno ( ? ) la nav bar, caso contrario ( : ) null. otra forma es usar doble unpersant: todo igual solo reemplazo ? por &&; y :null ya no es necesario

  const navigate = useNavigate(); //EJE 5.2(R-FORMS) Para que nos redirija a home, y se lo mando a login tambien

  const [characters, setCharacters] = useState([]);
  //ejrecicio 3:aca estoy creando mi estado, con destructuring con CORCHETES, porque lo que retorna el useState ES UN ARRAY.characters es mi estado, y setChar es mi funcion para setear mi estado.(redundancia)

  //EJE 5.1(R-FORMS) crear access
  const [access, setAccess] = useState(false);
  //EJE 5.2(R-FORMS): crear la fn de login; tambien en el return debo pasarle a Route Form el login como propiedad.... Con userData comparo que lo que esté recibiendo sea igual al email y password definidos en la constante>>>si es igual entonces setAcces es true
  const login = (userData) => {
    if (userData.email === email && userData.password === password) {
      setAccess(true);
      navigate("/home"); //EJE 5.2(R-FORMS).. si todo da bien le estoy pidiendo que me lleve a /home al dar a submit
    }
  };

  //EJE 5.3(R-FORMS): El useEffect lleva DOS PARAMETROS: el cb y el array de dependencias.IMPORTANTE EL ARRAY SINO SE HACE LOOP INFINITO... ¡¡¡¡BANEO DEL API!!!!!
  useEffect(() => {
    !access && navigate("/");
  }, [access]); //lo digo al array que tiene que estar pendiente de acces porque cuando cambia eso es que debe ejecutarse el codigo !access &&...

  //Este onSearch es el nuevo que me dan para reemplazar el anterior que usaba la cosntante(ejer 7 CICLOS)
  const onSearch = (id) => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
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
  //agrego Number porque lo que recibe por parametro es un string y de comparacion es numero()...ACTUALIZACION REACT RUTAS: CAMBIAMOS DE API y esta no necesita que le agreguemos number asi que lo quitamos >>> !== Number(id) SE VA
  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(charactersFiltered);
  };

  return (
    <div className="App">
      {location.pathname !== "/" ? <Nav onSearch={onSearch} /> : null}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        {/* <Route path="/favorites" element={<Favorites/>}/> */}
      </Routes>
    </div>
  );
}

export default App;

// REACT CICLOS
// //ejercicio 2: importo y renderizo <Nav />
// //ejercicio 5: le agrego al renderizado de nav la propiedad de onSearch que cree en el ejercicio 4; ejerc 5.2 lo trabajo sobre Nav.jsx
//
//EJE 3-CARDS(react routes): creo <Routes> dentro del return y alli agrego la ruta camino para home y muevo la linea de Cards characters..dentro
// tambien importo el about y el detail, y renderizo debajo de laroute del home en dos rutas aparte. detalle la ruta de DETAIL es variable, por eso tiene id
//
//EJE 2 (REACT FORMS):importo Form; y dentro del return crear la ruta '/', que la hago haciendo un route debajo de routes
//
//

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
