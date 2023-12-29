package com.example.restoranrese.repositorys;

import com.example.restoranrese.Order;
import com.example.restoranrese.OrderStatus;

import java.util.List;

public interface OrderService {
    List<Order> getAllOrders();
    Order getOrderById(Long id);
    void placeOrder(Order order);
    void updateOrderStatus(Long id, OrderStatus newStatus);
}
