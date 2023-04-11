import SearchBar from "./SearchBar";

const Nav = ({ onSearch }) => {
  return (
    <nav>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Nav;

//ejerc 5.2(REACT CICLOS):hago destructuring y le agrego onsearch a Nav y al Search bar
