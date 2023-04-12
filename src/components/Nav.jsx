import SearchBar from "./SearchBar";
import { Link } from "react-router-dom"; //EJE 2.2(react routes) hago la importación de link y le agrego los botones ABOUT y HOME al renderizado(abajo). a su vez a link lo vinculo a /about y  /home mediante (to="") en cada boton respectivamente.

const Nav = ({ onSearch }) => {
  return (
    <nav>
      <SearchBar onSearch={onSearch} />
      <button>
        <Link to="/about">ABOUT</Link>
      </button>
      <hr />
      <button>
        <Link to="/home">HOME</Link>
      </button>
    </nav>
  );
};

export default Nav;

//ejerc 5.2(REACT CICLOS):hago destructuring y le agrego onsearch a Nav y al Search bar

//EJE EXTRA (REACT 10) crear boton(o link) en este componente para que sea el logout
