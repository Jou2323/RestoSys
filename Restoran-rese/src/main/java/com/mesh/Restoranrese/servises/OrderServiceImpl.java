package com.mesh.Restoranrese.servises;

import com.mesh.Restoranrese.Dish;
import com.mesh.Restoranrese.Order;
import com.mesh.Restoranrese.OrderStatus;
import com.mesh.Restoranrese.UserRole;
import com.mesh.Restoranrese.repositorys.MenuRepository;
import com.mesh.Restoranrese.repositorys.OrderRepository;
import com.mesh.Restoranrese.repositorys.OrderService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {
    private final OrderRepository orderRepository;
    private final MenuRepository menuRepository;
    public OrderServiceImpl(OrderRepository orderRepository, MenuRepository menuRepository) {
        this.orderRepository = orderRepository;
        this.menuRepository = menuRepository;
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Order getOrderById(String id) {
        return orderRepository.findById(id).orElse(null);
    }

    @Override
    public void placeOrder(Order order) {
        String dishName = order.getName();
        Dish dish = menuRepository.findByName(dishName);

        if (dish != null) {
            order.setPrice(dish.getPrice()); // Set the price directly
            orderRepository.save(order);
        } else {
            System.out.println("Dish with name " + dishName + " not found.");
        }
    }

    @Override
    public void updateOrderStatus(String id, OrderStatus newStatus) {
        // Логіка оновлення статусу замовлення
        Order orderUpd = getOrderById(id);
        if (orderUpd != null) {
            orderUpd.setNumber_card(orderUpd.getNumber_card());
            orderUpd.setCustomer_email(orderUpd.getCustomer_email());
            orderUpd.setStatus(orderUpd.getStatus());
            orderUpd.setPrice(orderUpd.getPrice());
        }
    }
}
