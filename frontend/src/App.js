// frontend/src/App.js
import React from 'react';
import AddRecipe from './components/AddRecipe';
import RecipeList from './components/RecipeList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Recipe Book</h1>
      <AddRecipe />
      <RecipeList />
    </div>
  );
}

export default App;