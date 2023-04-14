import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [characterID, setcharacterID] = useState("");

  const handleChange = (event) => {
    setcharacterID(event.target.value);
  };

  const randomCharacter = () => {
    return Math.floor(Math.random() * 826 + 1);
  };

  return (
    <div>
      <hr />
      <input type="search" onChange={handleChange} value={characterID} />
      <br />
      <br />
      <button
        onClick={() => {
          onSearch(characterID);
          setcharacterID("");
        }}
      >
        Agregar➕
      </button>
      <br />
      <br />
      <button onClick={() => onSearch(randomCharacter())}>
        Agregar Aleatorio🎰
      </button>
      <hr />
      <br />
      {/* <button onClick={randomCharacter}>Add Random Character</button> */}
    </div>
  );
}
// import { useState } from "react";

// export default function SearchBar({ onSearch }) {
//   const [id, setId] = useState("");

//   const handleChange = (event) => {
//     setId(event.target.value);
//   };

//   return (
//     <div>
//       <input type="search" onChange={handleChange} value={id} />
//       <button
//         onClick={() => {
//           onSearch(id);
//           setId("");
//         }}
//       >
//         Agregar ➕
//       </button>
//     </div>
//   );
// }
