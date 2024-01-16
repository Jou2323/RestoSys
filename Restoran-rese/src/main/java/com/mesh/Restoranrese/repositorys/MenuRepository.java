package com.mesh.Restoranrese.repositorys;

import com.mesh.Restoranrese.Dish;
import com.mesh.Restoranrese.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuRepository extends MongoRepository<Dish, String> {

    Dish findByName(String name);
}
