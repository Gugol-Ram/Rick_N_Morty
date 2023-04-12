import { useState } from "react"; //EJE 3.1(react forms)
import validation from "./Validation"; //EJE 4.2 luego de crear el archivo validation lo importo acá

const Form = ({ login }) => {
  //EJE 4.1(REACT FORMS) crear errors
  const [errors, setErrors] = useState({});
  //EJE 3.1(react forms): crear la const para user data
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  //EJE 3.3(REACT FORMS) crear esta funcion
  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value, //los brackets es una propiedad del objeto que es variable, porque son dos (emaill o password) y no sabemos cual es la que se modifica hasta que sucede
    });

    //EJE 4.2 despeus de improtar validation arriba, creo el llamado
    setErrors(
      validation({
        //validation esta RETORNANDO UN OBJETO
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  //EJE 6.2(R-FORMS) crear la funcion hSubmit y pasarle el login

  const handleSubmit = (event) => {
    event.preventDefault(); //prevent default es para evitar que se recargue la pagina en cada cambio
    login(userData); //tambien tengo que agregar {login} dentro de const Form(l.4)
  };

  //EJE 6.2(R-FORMS):dentro del form le agrego el handlesubmit
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email: </label>
      <input
        type="text"
        name="email"
        value={userData.email}
        onChange={handleChange}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      <hr />
      <label htmlFor="password">Password: </label>
      <input
        type="text"
        name="password"
        value={userData.password}
        onChange={handleChange}
      />
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      <hr />
      <button>Submit</button>
    </form>
  );
};

export default Form;

//EJE 1(REACT FORMS) crear las etiquetas label e input..htmlfor: es REFERENCIA  al input; por lo que tengo que agregarle el atributo name a inputo,y dentro email y password(respectivamente)
//EJE 3.2(REACT FORMS) agrego una propiedad 'value' a la etiqueta input y la propiedad'onChange' para que quede escuchando los cambios, es decir ante cada cambio se ejecuta la funcion handleChange que es la que se encarga de avisarle al estado que hay cambios
//EJE 4.2 (REACT FORMS): luego de hacer las validaciones para mensajes de error, hay que RENDERIZAR. lo hago en el return dentro de los input, con llaves porque estoy usando codigo de JS y no de react.leyendolo dice si en el estado errors hay una propiedad email entonces mostrala.
