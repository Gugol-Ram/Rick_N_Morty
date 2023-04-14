import SearchBar from "./SearchBar";
import { Link } from "react-router-dom"; //EJE 2.2(react routes) hago la importación de link y le agrego los botones ABOUT y HOME al renderizado(abajo). a su vez a link lo vinculo a /about y  /home mediante (to="") en cada boton respectivamente.// EJE EXTRA(10) traemos usenavigate para redirigirnos a form al hacer logout

const Nav = ({ onSearch, setAccess }) => {
  //EJE EXTRA(10)hacer logout CREANDO CONST HANDLELOGOUT... tambien agregamos setaccess en la const Nav
  const handleLogOut = () => {
    setAccess(false);
  };

  return (
    <nav>
      <div>
        <Link to="/home">🏡HOME🏡</Link>
        <Link to="/favorites">💖FAVORITES💖</Link>
        <br />
        <Link to="/about">🤔ABOUT🤔</Link>
      </div>
      <br />
      <button onClick={handleLogOut}>LogOut😡</button>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

// const Nav = ({ onSearch }) => {
//   return (
//     <nav>
//       <SearchBar onSearch={onSearch} />
//       <button>
//         <Link to="/about">ABOUT</Link>
//       </button>
//       <hr />
//       <button>
//         <Link to="/home">HOME</Link>
//       </button>
//     </nav>
//   );
// };

export default Nav;

//ejerc 5.2(REACT CICLOS):hago destructuring y le agrego onsearch a Nav y al Search bar

//EJE EXTRA (REACT 10) crear boton(o link) en este componente para que sea el logout
