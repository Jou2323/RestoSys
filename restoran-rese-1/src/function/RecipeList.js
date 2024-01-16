// RecipeList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IngredientsModal from './IngredientModal';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (ingredients) => {
    setSelectedIngredients(ingredients);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  useEffect(() => {
    // Завантаження списку рецептів з JSON-файлу
    axios.get('recipe.json')
      .then(response => setRecipes(response.data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  const handleEditClick = (recipeId) => {
    // Логіка для редагування рецепту
    console.log(`Editing recipe ${recipeId}`);
  };

  const handleDeleteClick = (recipeId) => {
    // Логіка для видалення рецепту
    console.log(`Deleting recipe ${recipeId}`);
  };


  return (
    <div>
      <h2>Recipe and Ingredients List</h2>
      <button>Add new</button>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <p>{recipe.recipeName}</p>
            <p>Category: {recipe.category}</p>
            <a onClick={() => openModal(recipe.ingredients)}>View Ingredients</a>
            <button onClick={() => handleEditClick(recipe.id)}>Edit</button>
            <button onClick={() => handleDeleteClick(recipe.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <IngredientsModal isOpen={isModalOpen} onRequestClose={closeModal} ingredients={selectedIngredients} />
    </div>
  );
};

export default RecipeList;
