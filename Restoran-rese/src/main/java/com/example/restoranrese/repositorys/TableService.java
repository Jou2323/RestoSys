package com.example.restoranrese.repositorys;

import com.example.restoranrese.Table;
import com.example.restoranrese.TableStatus;

import java.util.List;

public interface TableService {
    List<Table> getAllTables();
    Table getTableById(Long id);
    void createTable(Table table);
    void updateTableStatus(Long id, TableStatus newStatus);
    void updateTableLocation(Long id, String newLocation);
}
