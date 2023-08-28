import React, { useState } from "react";

let fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
const Suggetion = () => {
  let [search, setSearch] = useState("");
  let [filterFruit, setFilterFruit] = useState(fruits);

  function handleSearch(event) {
    const searchTerm = event.target.value;
    console.log(event.target.value);
    setSearch(searchTerm);

    const filteredFruits = fruits.filter((fruit) =>
      //fruit.toLowerCase().includes(search.toLowerCase())
      fruit.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterFruit(filteredFruits);
  }

  return (
    <div>
      <h2>Search Items</h2>
      <input type="text" onChange={handleSearch}></input>
      <ul>
        {filterFruit.map((fruit, index) => {
          return <li>{fruit}</li>;
        })}
      </ul>
    </div>
  );
};
export default Suggetion;
