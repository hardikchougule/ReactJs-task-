// Task: Build a simple React app that displays a list of items (e.g., a list of books, movies,
//   or tasks). Include a search bar to filter the list as the user types.


import React, { useState } from 'react';
import './App.css';

const MOvies = [
  "Pushpa",
  "KGF",
  "Rebel",
  "Don no.1",
  "Mass",
  "S/O Satyamurthy",
  "Aarya",
  "Luckey The Racer",
];

function App() {
  const [searchMovie, setSearchMovie] = useState("");

  // Filter items based on the search term
  const filteredItems = MOvies.filter((item) =>
    item.toLowerCase().includes(searchMovie.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Movie List</h1>
      <input
        type="text"
        placeholder="Search books..."
        value={searchMovie}
        onChange={(e) => setSearchMovie(e.target.value)}
        className="search-bar"
      />
      <ul className="item-list">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => 
          <li key={index}>
            {item}
            </li>
            )) : (
          <li>
            No items found
         </li>
        )}
      </ul>
    </div>
  );
}

export default App