package com.example.restoranrese.servises;

import com.example.restoranrese.Table;
import com.example.restoranrese.TableStatus;
import com.example.restoranrese.repositorys.TableService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TableServiceImpl implements TableService {
    private final List<Table> tableList = new ArrayList<>();

    @Override
    public List<Table> getAllTables() {
        return tableList;
    }

    @Override
    public Table getTableById(Long id) {
        return tableList.stream()
                .filter(table -> table.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    @Override
    public void createTable(Table table) {
        // Логіка створення столика
        tableList.add(table);
    }

    @Override
    public void updateTableStatus(Long id, TableStatus newStatus) {
        // Логіка оновлення статусу столика
        Table table = getTableById(id);
        if (table != null) {
            table.setStatus(newStatus);
        }
    }

    @Override
    public void updateTableLocation(Long id, String newLocation) {
        // Логіка оновлення розташування столика
        Table table = getTableById(id);
        if (table != null) {
            table.setLocation(newLocation);
        }
    }
}
