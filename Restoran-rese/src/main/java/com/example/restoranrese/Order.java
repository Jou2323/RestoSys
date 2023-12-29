package com.example.restoranrese;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "order")
public class Order {
    @Id
    private Long id;
    private Long customerId;
    private Long serviceStaffId;
    private String details;
    private OrderStatus status;

    // Конструктори, гетери, сетери

    public Order(Long id, Long customerId, Long serviceStaffId, String details, OrderStatus status) {
        this.id = id;
        this.customerId = customerId;
        this.serviceStaffId = serviceStaffId;
        this.details = details;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

    public Long getServiceStaffId() {
        return serviceStaffId;
    }

    public void setServiceStaffId(Long serviceStaffId) {
        this.serviceStaffId = serviceStaffId;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public OrderStatus getStatus() {
        return status;
    }

    public void setStatus(OrderStatus status) {
        this.status = status;
    }
}
