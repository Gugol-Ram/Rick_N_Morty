import axios from "axios"; //EJE 5(r-routes)
import { useParams } from "react-router-dom"; //EJE 5.2(r-routes)
import { useState } from "react"; //EJE 5.3(r-routes) ////EJE 5.4(r-routes) traer useEffect
import { useEffect } from "react";

const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "5d9cae0b93f7.7c8361b50bac69d75b6e";

const Detail = () => {
  //despues de copiar el codigo en el eje 5.4 tengo que agregar la const id sino se rompe
  const { id } = useParams();
  //parte del 5.3:hago destructuring porque useState es un array de dos objetos. cuando paso un valor en useState esto se asigna al estado por default, asiq que empieza por default en vacio
  const [character, setCharacter] = useState({});

  //EJE5.4(r-routes) copiar codigo
  useEffect(() => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <h2>{character?.name}</h2>
      <h2>{character?.status}</h2>
      <h2>{character?.gender}</h2>
      <h2>{character?.species}</h2>
      <h2>{character?.origin?.name}</h2>
      <img src={character?.image} alt={character?.name} />
    </div>
  );
};

export default Detail;

//este archivo con solo div vacio se crea en el EJE 3 (REACT ROUTES)

//video react routes 1:00:00
//ejercicio 6 (r-routes): agregar en el return el character. al poner && estoy diciendo si hay algo en character entocnes renderizar name, gender, status etc esta es una forma de hacerlo(renderizado condicional) pero se utilizan otras... como coercion de datos o CONDICIONAL CHAINING(el que coloqué)

//RENDER CONDICIONAL X:
//  {
//    character && (
//      <div>
//        <h2>{character.name}</h2>
//        <h2>{character.status}</h2>
//      </div>
//    );
//  }
//USANDO COERCION DE DATOS: TERNARIO
//usando el ternario ? es como usar if else,estoy diciendo si hay algo en char entonces renderizar h2, sino( : ) renderizar null
//  {
//    character ? <h2>{character.name}</h2> : null;
//  }
