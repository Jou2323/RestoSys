package com.mesh.Restoranrese.servises;

import com.mesh.Restoranrese.Dish;
import com.mesh.Restoranrese.Table;
import com.mesh.Restoranrese.TableStatus;
import com.mesh.Restoranrese.UserRole;
import com.mesh.Restoranrese.repositorys.OrderRepository;
import com.mesh.Restoranrese.repositorys.TableRepository;
import com.mesh.Restoranrese.repositorys.TableService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class TableServiceImpl implements TableService {
    private final TableRepository tableRepository;

    public TableServiceImpl(TableRepository tableRepository) {
        this.tableRepository = tableRepository;
    }

    @Override
    public List<Table> getAllTables() {
        return tableRepository.findAll();
    }

    @Override
    public Table getTableById(String id) {
        return tableRepository.findById(id).orElse(null);
    }

    @Override
    public void createTable(Table table) {
        table.setStatus(TableStatus.FREE);
        table.setDateTable(LocalDateTime.now());
        tableRepository.save(table);
    }

    @Override
    public void updateTableStatus(String id, TableStatus newStatus) {
        // Логіка оновлення статусу столика
        Table tableUpd = getTableById(id);
        if (tableUpd != null) {
            tableUpd.setStatus(tableUpd.getStatus());
        }
    }

    @Override
    public void updateTableLocation(String id, String newLocation) {
        // Логіка оновлення розташування столика
        Table table = getTableById(id);
        if (table != null) {
            table.setLocation(table.getLocation());
        }
    }
}
