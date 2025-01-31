// backend/routes/recipeRoutes.js
const express = require('express');
const router = express.Router();
const {
  addRecipe,
  getRecipes,
  getRecipeByName,
  deleteRecipe,
} = require('../controllers/recipeController');

router.post('/recipes', addRecipe);
router.get('/recipes', getRecipes);
router.get('/recipes/:name', getRecipeByName); // Ensure this route is correct
router.delete('/recipes/:id', deleteRecipe);

module.exports = router;