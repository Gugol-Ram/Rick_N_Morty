////EJE 4.2(REACT FORMS) crear este archvio y crear la funcion
const validation = (userData) => {
  const errors = {}; //inicializo un objeto porque esta funcion tiene que estar retornando un objeto. cada vez que encuentre un error en los campos email o password se me va a estar creand dicho objeto

  // realizo las validaciones, siempre son condicionales
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) {
    //usando .test voy evaluando, en este caso quiero evaluar de userData el email.
    //IMPORTANTE: NIEGO( ! ) la regex porque si da true(coincide a lo esperado) no tengo que hacer nada
    errors.email = " el email ingresado no es válido"; //creo la propiedad para dar el mensaje de error
  }
  if (!userData.email) {
    //condiciono si userData esta vacio
    errors.email = "debe ingresar un email";
  }
  if (userData.email.length > 35) {
    errors.email = "el email no debe superar los 35 caracteres";
  }
  if (!/.*\d+.*/.test(userData.password)) {
    //nuevamente utilizo .test pero para evaluar en esta caso PASSWORD. tambien tengo que negar la REGEX ( ! )
    errors.password = "La contraseña debe contener al menos un numero";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password =
      "la contraseña debe tener un tamaño de entre 6 y 10 caracteres";
  }

  return errors;
};

export default validation;

//!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i validacion REGEX
