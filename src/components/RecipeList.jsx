import React from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeList({ recipes }) {
  if (!recipes.length) 
  return <p>Try searching for something above!</p>;

  return (
    <div className="recipe-grid">
      {recipes.map((meal) => (
        <RecipeCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}
