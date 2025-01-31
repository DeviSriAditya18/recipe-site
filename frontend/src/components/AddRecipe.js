// frontend/src/components/AddRecipe.js
import React, { useState } from 'react';
import axios from 'axios';
import "./addRecipe.css"

const AddRecipe = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = { name, ingredients: ingredients.split(','), instructions };
    try {
      await axios.post('http://localhost:5000/api/recipes', newRecipe);
      alert('Recipe added successfully!');
      setName('');
      setIngredients('');
      setInstructions('');
    } catch (err) {
      console.error('Error adding recipe:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Recipe</h2>
      <input
        type="text"
        placeholder="Recipe Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Ingredients (comma separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        required
      />
      <textarea
        placeholder="Instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        required
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipe;