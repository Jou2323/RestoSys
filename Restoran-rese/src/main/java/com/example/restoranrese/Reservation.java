package com.example.restoranrese;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
@Document(collection = "reservation")
public class Reservation {
    @Id
    private Long id;
    private Long customerId;
    private Long tableId;
    private LocalDateTime dateTime;
    private int numberOfGuests;

    // Конструктори, гетери, сетери

    public Reservation(Long id, Long customerId, Long tableId, LocalDateTime dateTime, int numberOfGuests) {
        this.id = id;
        this.customerId = customerId;
        this.tableId = tableId;
        this.dateTime = dateTime;
        this.numberOfGuests = numberOfGuests;
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

    public Long getTableId() {
        return tableId;
    }

    public void setTableId(Long tableId) {
        this.tableId = tableId;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public int getNumberOfGuests() {
        return numberOfGuests;
    }

    public void setNumberOfGuests(int numberOfGuests) {
        this.numberOfGuests = numberOfGuests;
    }
}
