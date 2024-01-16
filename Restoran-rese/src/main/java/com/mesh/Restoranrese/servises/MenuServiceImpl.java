package com.mesh.Restoranrese.servises;

import com.mesh.Restoranrese.Dish;
import com.mesh.Restoranrese.Recipe;
import com.mesh.Restoranrese.repositorys.MenuRepository;
import com.mesh.Restoranrese.repositorys.MenuService;
import com.mesh.Restoranrese.repositorys.RecipeRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MenuServiceImpl implements MenuService {
    private final MenuRepository menuRepository;

    public MenuServiceImpl(MenuRepository menuRepository) {
        this.menuRepository = menuRepository;
    }

    @Override
    public List<Dish> getAllDishes() {
        return menuRepository.findAll();
    }

    @Override
    public Dish getDishById(String id) {
        return menuRepository.findById(id).orElse(null);
    }

    @Override
    public void addDish(Dish dish) {
        // Логіка додавання страви до меню
        menuRepository.save(dish);
    }

    @Override
    public void updateDish(String id, Dish updatedDish) {
        // Логіка оновлення інформації про страву
        Dish existingDish = getDishById(id);
        if (existingDish != null) {
            existingDish.setName(updatedDish.getName());
            existingDish.setCategory(updatedDish.getCategory());
            existingDish.setPrice(updatedDish.getPrice());
            existingDish.setRecipeList(updatedDish.getRecipeList());
        }
    }

    @Override
    public void deleteDish(String id) {
        menuRepository.deleteById(id);
    }

}
