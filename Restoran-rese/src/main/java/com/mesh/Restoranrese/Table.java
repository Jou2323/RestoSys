package com.mesh.Restoranrese;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.time.LocalDateTime;

@Document(collection = "table")
@Data
@NoArgsConstructor
public class Table {
    @Id
    private String id;
    private int number;
    private String position;
    private int num_guest;
    private LocalDateTime dateTable;
    @Enumerated(EnumType.STRING)
    private TableStatus status;

    // Конструктори, гетери, сетери

    public Table(String id, int number, String position,int num_guest, TableStatus status, LocalDateTime dateTable) {
        this.id = id;
        this.number=number;
        this.num_guest = num_guest;
        this.position = position;
        this.status = status;
        this.dateTable=dateTable;
    }

    public LocalDateTime getDateTable() {
        return dateTable;
    }

    public void setDateTable(LocalDateTime dateTable) {
        this.dateTable = dateTable;
    }

    public int getNum_guest() {
        return num_guest;
    }

    public void setNum_guest(int num_guest) {
        this.num_guest = num_guest;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }



    public String getLocation() {
        return position;
    }

    public void setLocation(String position) {
        this.position = position;
    }

    public TableStatus getStatus() {
        return status;
    }

    public void setStatus(TableStatus status) {
        this.status = status;
    }
}
