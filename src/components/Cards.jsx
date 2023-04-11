import Card from "./Card";

export default function Cards({ characters, onClose }) {
  return (
    <div>
      {characters.map(
        ({ id, name, status, species, gender, origin, image }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              image={image}
              origin={origin.name}
              onClose={onClose}
            />
          );
        }
      )}
    </div>
  );
}

//no puedo usar forEach por que recorre pero NO RETORNA NADA, en cambio el map si hace ambas cosas
//la key es para uso interno de react, no puedo acceder yo. la key tiene queseralgo unico, por lo general es igual al id ya que eso siempre es algo unico, react hace internamente ladiferenciacion.

//characters es un array, que dentro tiene cada personaje.
//es origin.name porque en el archivo data.js origin es un arreglo, que contiene nombre del planeta y una url, y nosotros solo necesitamos el nombre.

//EJERC 8 CICLOS: agregar id={id} (ya venia de antes)TAMBIEN AGREGO onClose al default exports y al onClose contenido en el div lo cambio por onClose={onClose}
