package com.mesh.Restoranrese;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "recipes")
@Data
@NoArgsConstructor
public class Recipe {
    @Id
    private String id;
    private String name;
    private String category;
    private String ingredients;

    public Recipe(String id, String name, String category, String ingredients) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.ingredients = ingredients;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getIngredients() {
        return ingredients;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }
// Конструктори, гетери, сетери
}
