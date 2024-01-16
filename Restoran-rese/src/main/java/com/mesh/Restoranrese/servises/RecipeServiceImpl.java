package com.mesh.Restoranrese.servises;

import com.mesh.Restoranrese.Recipe;
import com.mesh.Restoranrese.repositorys.RecipeRepository;
import com.mesh.Restoranrese.repositorys.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeServiceImpl implements RecipeService {

    private final RecipeRepository recipeRepository;

    @Autowired
    public RecipeServiceImpl(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    @Override
    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }

    @Override
    public Recipe getRecipeById(String id) {
        return recipeRepository.findById(id).orElse(null);
    }

    @Override
    public void addRecipe(Recipe recipe) {
        recipeRepository.save(recipe);
    }

    @Override
    public void updateRecipe(String id, Recipe updatedRecipe) {
        Recipe existingRecipe = recipeRepository.findById(id).orElse(null);
        if (existingRecipe != null) {
            existingRecipe.setName(updatedRecipe.getName());
            existingRecipe.setCategory(updatedRecipe.getCategory());
            existingRecipe.setIngredients(updatedRecipe.getIngredients());
            recipeRepository.save(existingRecipe);
        }
    }

    @Override
    public void deleteRecipe(String id) {
        recipeRepository.deleteById(id);
    }
}
