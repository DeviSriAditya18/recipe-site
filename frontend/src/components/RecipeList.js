// frontend/src/components/RecipeList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./recipeList.css";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const res = await axios.get('https://recipe-site-backend-8epd.onrender.com/api/recipes');
      setRecipes(res.data);
    } catch (err) {
      console.error('Error fetching recipes:', err);
    }
  };

  const handleSearch = async () => {
    if (!searchTerm) {
      fetchRecipes(); // Fetch all recipes if search term is empty
      return;
    }
    try {
      const res = await axios.get(`https://recipe-site-backend-8epd.onrender.com/api/recipes/${encodeURIComponent(searchTerm)}`);
      setRecipes([res.data]); // Display the single recipe found
    } catch (err) {
      console.error('Error searching recipe:', err);
      alert('Recipe not found');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://recipe-site-backend-8epd.onrender.com/api/recipes/${id}`);
      setRecipes(recipes.filter((recipe) => recipe._id !== id));
    } catch (err) {
      console.error('Error deleting recipe:', err);
    }
  };

  return (
    <div>
      <h2>Recipes</h2>
      <div>
        <input
          type="text"
          placeholder="Search by recipe name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {recipes.map((recipe) => (
        <div key={recipe._id}>
          <h3>{recipe.name}</h3>
          <p>
            <strong>Ingredients:</strong> {recipe.ingredients.join(', ')}
          </p>
          <p>
            <strong>Instructions:</strong> {recipe.instructions}
          </p>
          <button onClick={() => handleDelete(recipe._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
