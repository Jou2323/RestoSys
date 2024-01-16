package com.mesh.Restoranrese.repositorys;

import com.mesh.Restoranrese.Recipe;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface RecipeService {
    List<Recipe> getAllRecipes();
    Recipe getRecipeById(String id);
    void addRecipe(Recipe recipe);
    void updateRecipe(String id, Recipe updatedRecipe);
    void deleteRecipe(String id);
}
