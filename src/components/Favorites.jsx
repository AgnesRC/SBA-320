import React from "react";
import useLocalStorage from "./LocalStorage";
import RecipeCard from "./RecipeCard";

export default function Favorites() {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((meal) => meal.idMeal !== id));
  };

  if (!favorites.length) return <p>No favorites added yet!</p>;

  return (
    <div className="recipe-grid">
      {favorites.map((meal) => (
        <div key={meal.idMeal}>
          <RecipeCard meal={meal} />
          <button className="btn" onClick={() => removeFavorite(meal.idMeal)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
