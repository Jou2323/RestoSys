package com.example.restoranrese.repositorys;

import com.example.restoranrese.Dish;

import java.util.List;

public interface MenuService {
    List<Dish> getAllDishes();
    Dish getDishById(Long id);
    void addDish(Dish dish);
    void updateDish(Long id, Dish updatedDish);
    void deleteDish(Long id);
}
