package com.example.restoranrese.servises;

import com.example.restoranrese.Dish;
import com.example.restoranrese.repositorys.MenuService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MenuServiceImpl implements MenuService {
    private final List<Dish> dishList = new ArrayList<>();

    @Override
    public List<Dish> getAllDishes() {
        return dishList;
    }

    @Override
    public Dish getDishById(Long id) {
        return dishList.stream()
                .filter(dish -> dish.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    @Override
    public void addDish(Dish dish) {
        // Логіка додавання страви до меню
        dishList.add(dish);
    }

    @Override
    public void updateDish(Long id, Dish updatedDish) {
        // Логіка оновлення інформації про страву
        Dish existingDish = getDishById(id);
        if (existingDish != null) {
            existingDish.setName(updatedDish.getName());
            existingDish.setCategory(updatedDish.getCategory());
            existingDish.setPrice(updatedDish.getPrice());
        }
    }

    @Override
    public void deleteDish(Long id) {
        // Логіка видалення страви з меню
        dishList.removeIf(dish -> dish.getId().equals(id));
    }
}
