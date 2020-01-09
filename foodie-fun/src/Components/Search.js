// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";


// function Search () {
  
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
  
//   useEffect(() => {
//     const results = props.Restaurant.filter(props =>
//       props.Restaurant.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setSearchResults(results);
//   }, [searchTerm]);
  
//   const handleChange = e => {
//     setSearchTerm(e.target.value);
//   };

//   return (
//   <div className="Search">
//       <form>
//         <label htmlFor="search">Search:</label>
//         <input
//           id="search"
//           type="text"
//           name="search"
//           placeholder="Search"
//           onChange={handleChange}
//           value={searchTerm}
//         />
//       </form>
//       <div className="search-list">
//         <ul>
//           {searchResults.map(props => (
//             <li key={props.Restaurant}>{props.Restaurant}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Search />, rootElement);

// export default Search
