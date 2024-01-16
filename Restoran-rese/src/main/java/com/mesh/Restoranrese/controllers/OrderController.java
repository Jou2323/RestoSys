package com.mesh.Restoranrese.controllers;

import com.mesh.Restoranrese.Order;
import com.mesh.Restoranrese.OrderStatus;
import com.mesh.Restoranrese.repositorys.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
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
    public Order getOrderById(@PathVariable String id) {
        return orderService.getOrderById(id);
    }

    @PostMapping
    public void placeOrder(@RequestBody Order order) {
        order.setName(order.getName());
        order.setDateOrdering(LocalDateTime.now());
        order.setStatus(OrderStatus.IN_PROGRESS);
        orderService.placeOrder(order);
    }

    @PutMapping("/{id}/status")
    public void updateOrderStatus(@PathVariable String id, @RequestParam OrderStatus newStatus) {
        orderService.updateOrderStatus(id, newStatus);
    }
}
