import React, { useState, useEffect } from "react";
import RecipeDetails from "./RecipeDetails";

export default function RandomRecipe() {
  const [recipe, setRecipe] = useState(null);

  const fetchRandom = async () => {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const data = await res.json();
    setRecipe(data.meals[0]);
  };

  useEffect(() => {
    fetchRandom();
  }, []);

  return (
    <div>
      <h2>Random Recipe of the Day</h2>
      <button onClick={fetchRandom} className="btn">Get New Recipe</button>
      {recipe && <RecipeDetails recipe={recipe} />}
    </div>
  );
}
