// backend/controllers/recipeController.js
const Recipe = require('../models/Recipe');

// Add a new recipe
exports.addRecipe = async (req, res) => {
  try {
    const { name, ingredients, instructions } = req.body;
    if (!name || !ingredients || !instructions) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const newRecipe = new Recipe({ name, ingredients, instructions });
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
};

// Get all recipes
exports.getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
};

// Get recipe by name
exports.getRecipeByName = async (req, res) => {
  try {
    const { name } = req.params;
    const recipe = await Recipe.findOne({ name });
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
};

// Delete a recipe
exports.deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    await Recipe.findByIdAndDelete(id);
    res.status(200).json({ message: 'Recipe deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
};