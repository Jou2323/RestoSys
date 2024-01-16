package com.mesh.Restoranrese.repositorys;

import com.mesh.Restoranrese.Order;
import com.mesh.Restoranrese.OrderStatus;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface OrderService {
    List<Order> getAllOrders();
    Order getOrderById(String id);
    void placeOrder(Order order);
    void updateOrderStatus(String id, OrderStatus newStatus);
}
