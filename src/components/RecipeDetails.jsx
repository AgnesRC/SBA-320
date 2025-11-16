import React from "react";
import useLocalStorage from "./LocalStorage";

export default function RecipeDetails({ recipe }) {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  const addFavorite = () => {
    const exists = favorites.find(fav => fav.idMeal === recipe.idMeal);
  
    if (!exists) {
      setFavorites([...favorites, recipe]);
    }
  };  


  return (
    <div className="recipe-details">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h2>{recipe.strMeal}</h2>

      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((item, i) => <li key={i}>{item}</li>)}
      </ul>

      <h3>Instructions</h3>
      <p>{recipe.strInstructions}</p>

      <button className="btn" onClick={addFavorite}>Add to Favorites</button>
    </div>
  );
}
