package com.mesh.Restoranrese.repositorys;

import com.mesh.Restoranrese.Table;
import com.mesh.Restoranrese.TableStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TableService {
    List<Table> getAllTables();
    Table getTableById(String id);
    void createTable(Table table);
    void updateTableStatus(String id, TableStatus newStatus);
    void updateTableLocation(String id, String newLocation);
}
