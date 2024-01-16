package com.mesh.Restoranrese.controllers;

import com.mesh.Restoranrese.Recipe;
import com.mesh.Restoranrese.repositorys.RecipeService;
import com.mesh.Restoranrese.servises.RecipeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recipes")
public class RecipeController {

    private final RecipeService recipeService;

    @Autowired
    public RecipeController(RecipeServiceImpl recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping
    public List<Recipe> getAllRecipes() {
        return recipeService.getAllRecipes();
    }

    @GetMapping("/{id}")
    public Recipe getRecipeById(@PathVariable String id) {
        return recipeService.getRecipeById(id);
    }

    @PostMapping
    public void addRecipe(@RequestBody Recipe recipe) {
        recipeService.addRecipe(recipe);
    }

    @PutMapping("/{id}")
    public void updateRecipe(@PathVariable String id, @RequestBody Recipe updatedRecipe) {
        recipeService.updateRecipe(id, updatedRecipe);
    }

    @DeleteMapping("/{id}")
    public void deleteRecipe(@PathVariable String id) {
        recipeService.deleteRecipe(id);
    }
}
