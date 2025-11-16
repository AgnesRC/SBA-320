import React, { useState } from "react";
import RandomRecipe from "../components/RandomRecipe";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";

export default function Homepage() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="container">
      <RandomRecipe />
      <SearchBar setSearchResults={setSearchResults} />
      <RecipeList recipes={searchResults} />
    </div>
  );
}
