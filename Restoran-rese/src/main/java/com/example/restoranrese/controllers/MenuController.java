package com.example.restoranrese.controllers;

import com.example.restoranrese.Dish;
import com.example.restoranrese.repositorys.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/menu")
public class MenuController {

    private final MenuService menuService;

    @Autowired
    public MenuController(MenuService menuService) {
        this.menuService = menuService;
    }

    @GetMapping
    public List<Dish> getAllDishes() {
        return menuService.getAllDishes();
    }

    @GetMapping("/{id}")
    public Dish getDishById(@PathVariable Long id) {
        return menuService.getDishById(id);
    }

    @PostMapping
    public void addDish(@RequestBody Dish dish) {
        menuService.addDish(dish);
    }

    @PutMapping("/{id}")
    public void updateDish(@PathVariable Long id, @RequestBody Dish updatedDish) {
        menuService.updateDish(id, updatedDish);
    }

    @DeleteMapping("/{id}")
    public void deleteDish(@PathVariable Long id) {
        menuService.deleteDish(id);
    }
}
