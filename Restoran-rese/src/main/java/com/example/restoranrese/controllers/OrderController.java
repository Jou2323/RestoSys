package com.example.restoranrese.controllers;

import com.example.restoranrese.Order;
import com.example.restoranrese.OrderStatus;
import com.example.restoranrese.repositorys.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {

    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    @GetMapping("/{id}")
    public Order getOrderById(@PathVariable Long id) {
        return orderService.getOrderById(id);
    }

    @PostMapping
    public void placeOrder(@RequestBody Order order) {
        orderService.placeOrder(order);
    }

    @PutMapping("/{id}/status")
    public void updateOrderStatus(@PathVariable Long id, @RequestParam OrderStatus newStatus) {
        orderService.updateOrderStatus(id, newStatus);
    }
}
