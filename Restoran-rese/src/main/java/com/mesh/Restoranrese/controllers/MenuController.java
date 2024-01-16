package com.mesh.Restoranrese.controllers;

import com.mesh.Restoranrese.Dish;
import com.mesh.Restoranrese.repositorys.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menu")
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
    public Dish getDishById(@PathVariable String id) {
        return menuService.getDishById(id);
    }

    @PostMapping
    public void addDish(@RequestBody Dish dish) {
        menuService.addDish(dish);
    }

    @PutMapping("/{id}")
    public void updateDish(@PathVariable String id, @RequestBody Dish updatedDish) {
        menuService.updateDish(id, updatedDish);
    }

    @DeleteMapping("/{id}")
    public void deleteDish(@PathVariable String id) {
        menuService.deleteDish(id);
    }
}
