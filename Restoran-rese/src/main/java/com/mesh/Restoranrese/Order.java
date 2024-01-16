package com.mesh.Restoranrese;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.time.LocalDateTime;

@Document(collection = "order")
@Data
@NoArgsConstructor
public class Order {
    @Id
    private String id;
    private String customer_email;
    private String Number_card;
    private LocalDateTime dateOrdering;
    private String name;
    private double price;
    @Enumerated(EnumType.STRING)
    private OrderStatus status;

    // Конструктори, гетери, сетери

    public Order(String id, String customer_email, String name, double price, String Number_card,LocalDateTime dateOrdering, OrderStatus status) {
        this.id = id;
        this.customer_email = customer_email;
        this.Number_card = Number_card;
        this.dateOrdering = dateOrdering;
        this.name = name;
        this.price = price;
        this.status = status;
    }

    public String getNumber_card() {
        return Number_card;
    }

    public void setNumber_card(String number_card) {
        Number_card = number_card;
    }

    public LocalDateTime getDateOrdering() {
        return dateOrdering;
    }

    public void setDateOrdering(LocalDateTime dateOrdering) {
        this.dateOrdering = dateOrdering;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }


    public String getCustomer_email() {
        return customer_email;
    }

    public void setCustomer_email(String customer_email) {
        this.customer_email = customer_email;
    }

    public OrderStatus getStatus() {
        return status;
    }

    public void setStatus(OrderStatus status) {
        this.status = status;
    }
}
