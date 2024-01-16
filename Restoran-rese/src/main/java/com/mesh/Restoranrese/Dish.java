package com.mesh.Restoranrese;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "dish")
@Data
@NoArgsConstructor
public class Dish {
    @Id
    private String id;
    private String name;
    private String category;
    private String recipeNames;
    private double price;
    private String image;

    // Конструктори, гетери, сетери

    public Dish(String id, String name, String category, double price,String recipeNames, String image) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.recipeNames=recipeNames;
        this.image = image;
    }

    public String getRecipeList() {
        return recipeNames;
    }

    public void setRecipeList(String recipeNames) {
        this.recipeNames = recipeNames;
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

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }


    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
