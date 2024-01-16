package com.mesh.Restoranrese.repositorys;

import com.mesh.Restoranrese.Dish;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface MenuService {
    List<Dish> getAllDishes();
    Dish getDishById(String id);
    void addDish(Dish dish);
    void updateDish(String id, Dish updatedDish);
    void deleteDish(String id);
}
