package com.example.restoranrese.servises;

import com.example.restoranrese.Order;
import com.example.restoranrese.OrderStatus;
import com.example.restoranrese.repositorys.OrderService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {
    private final List<Order> orderList = new ArrayList<>();

    @Override
    public List<Order> getAllOrders() {
        return orderList;
    }

    @Override
    public Order getOrderById(Long id) {
        return orderList.stream()
                .filter(order -> order.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    @Override
    public void placeOrder(Order order) {
        // Логіка оформлення замовлення
        orderList.add(order);
    }

    @Override
    public void updateOrderStatus(Long id, OrderStatus newStatus) {
        // Логіка оновлення статусу замовлення
        Order order = getOrderById(id);
        if (order != null) {
            order.setStatus(newStatus);
        }
    }
}
