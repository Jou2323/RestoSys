package com.mesh.Restoranrese.repositorys;

import com.mesh.Restoranrese.Dish;
import com.mesh.Restoranrese.Order;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrderRepository extends MongoRepository<Order, String> {
}
